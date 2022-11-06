import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { NewUserDTO } from '@dto';
import { CredentialsDTO } from './dto/credentials.dto';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthService
{
    constructor(
        private readonly configService: ConfigService,
        private readonly jwtService:    JwtService,
        private readonly usersService:  UsersService
    ) {}
    
    
    signup(information: NewUserDTO)
    {
        return this.usersService.create(information)
    }

    login(credentials: CredentialsDTO)
    {
        return 'This action logs user in';
    }

    logout()
    {
        return 'This action logs user out';
    }

    refresh()
    {
        return 'This action refreshes user\'s token';
    }

    getTokens(payload: )
}
