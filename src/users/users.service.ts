import { User } from '@prisma/client';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { NewUserDTO, UpdatePasswordDTO, UpdateUserCredentialsDTO } from '@dto';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class UsersService
{
    constructor(
        private readonly prisma: PrismaService
    ) {}

    create(createUserDTO: NewUserDTO): Promise<User>
    {
        const {confirm_password, ...user_data} = createUserDTO;

        this._check_if_user_exists(user_data);

        return this.prisma.user.create({
            data: user_data
        })
    }

    findAll(): Promise<User[]>
    {
        return this.prisma.user.findMany();
    }

    async findOne(user_id: number): Promise<User>
    {
        const user = await this.prisma.user.findUnique({
            where: { user_id }
        });

        if ( !user )
            throw new NotFoundException(`User with id: ${user_id} was NOT FOUND`);
        
        return user;
    }

    async updateInfo(user_id: number, updateUserInfoDTO: UpdateUserCredentialsDTO)
    {
        const user = await this.findOne(user_id)
    }

    updatePassword(user_id: number, updatePasswordDTO: UpdatePasswordDTO)
    {
        return `This action updates a #${user_id} user`;
    }

    async remove(user_id: number): Promise<User>
    {
        const user = await this.findOne(user_id);

        return this.prisma.user.delete({
            where: { user_id: user.user_id }
        });
    }

    findByEmail(email: string): Promise<User>
    {
        return this.prisma.user.findUnique({
            where: { email }
        });
    }

    findByUsername(username: string): Promise<User>
    {
        return this.prisma.user.findUnique({
            where: { username }
        });
    }

    private async _check_if_user_exists(user_data: Partial<User>): Promise<void>
    {
        const { email, username } = user_data;

        if ( await this.findByEmail(email) )
            throw new BadRequestException(`User with email: ${email} already EXISTS`);
        
        if ( await this.findByUsername(username) )
            throw new BadRequestException(`User with username: ${username} already EXISTS`);
    }
}
