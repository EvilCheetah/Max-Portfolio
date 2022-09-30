import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePasswordDTO } from './dto/update-password.dto';
import { UpdateUserInfoDTO } from './dto/update-user-info.dto';


@Controller('users')
export class UsersController
{
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(
        @Body()
        createUserDTO: CreateUserDTO
    )
    {
        return this.usersService.create(createUserDTO);
    }

    @Get()
    findAll()
    {
        return this.usersService.findAll();
    }

    @Get(':user_id')
    findOne(
        @Param('user_id', ParseIntPipe)
        user_id: number
    )
    {
        return this.usersService.findOne(user_id);
    }

    @Patch(':user_id/info')
    updateInfo(
        @Param('user_id', ParseIntPipe)
        user_id: number,
        
        @Body()
        updateUserInfoDTO: UpdateUserInfoDTO
    )
    {
        return this.usersService.updateInfo(user_id, updateUserInfoDTO);
    }

    @Patch(':user_id/password')
    updatePassword(
        @Param('user_id', ParseIntPipe)
        user_id: number,
        
        @Body()
        updatePasswordDTO: UpdatePasswordDTO
    )
    {
        return this.usersService.updatePassword(user_id, updatePasswordDTO);
    }

    @Delete(':user_id')
    remove(
        @Param('user_id', ParseIntPipe)
        user_id: number
    )
    {
        return this.usersService.remove(user_id);
    }
}
