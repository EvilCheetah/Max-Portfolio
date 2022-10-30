import { Injectable } from '@nestjs/common';
import { CreateAuthDTO } from './dto/create-auth.dto';
import { UpdateAuthDTO } from './dto/update-auth.dto';


@Injectable()
export class AuthService
{
    create(createAuthDTO: CreateAuthDTO)
    {
        return 'This action adds a new auth';
    }

    findAll()
    {
        return `This action returns all auth`;
    }

    findOne(id: number)
    {
        return `This action returns a #${id} auth`;
    }

    update(id: number, updateAuthDTO: UpdateAuthDTO)
    {
        return `This action updates a #${id} auth`;
    }

    remove(id: number)
    {
        return `This action removes a #${id} auth`;
    }
}