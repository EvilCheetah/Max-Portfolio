import { Body, Controller, Post } from '@nestjs/common';

import { NewUserDTO } from '@dto';
import { AuthService } from './auth.service';
import { CredentialsDTO } from './dto/credentials.dto';


@Controller('auth')
export class AuthController
{
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    signup(@Body() information: NewUserDTO)
    {
        return this.authService.signup(information);
    }

    @Post('login')
    login(@Body() credentials: CredentialsDTO)
    {
        
    }

    @Post('logout')
    logout()
    {

    }

    @Post('refresh')
    refresh()
    {
        
    }
}
