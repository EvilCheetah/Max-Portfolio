import { Body, Controller, HttpCode, HttpStatus, ParseIntPipe, Post, UseGuards } from '@nestjs/common';

import { Token, ValidatedUser } from '@types';
import { JwtTokens } from '@interface';
import { NewUserDTO } from '@dto';
import { GetUser, Public, User } from '@decorator';
import { JwtRefreshAuthGuard, LocalAuthGuard } from '@guard';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController
{
    constructor(private readonly authService: AuthService) {}


    @Public()
    @Post('signup')
    signup(
        @Body()
        information: NewUserDTO
    ): Promise<JwtTokens>
    {
        return this.authService.signup(information);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(
        @User()
        user: ValidatedUser
    ): Promise<JwtTokens>
    {
        return this.authService.login(user);
    }


    @Post('logout')
    @HttpCode(HttpStatus.OK)
    logout(
        @GetUser('sub', ParseIntPipe)
        user_id: number
    ): Promise<string>
    {
        return this.authService.logout(user_id);
    }


    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    @UseGuards(JwtRefreshAuthGuard)
    refresh(
        @GetUser('sub', ParseIntPipe)
        user_id: number,

        @GetUser('refresh_token')
        refresh_token: Token
    ): Promise<JwtTokens>
    {
        return this.authService.refresh(user_id, refresh_token);
    }
}
