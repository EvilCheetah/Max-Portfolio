import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { NewUserDTO } from '@dto';
import { Token, ValidatedUser } from "@types";
import { JwtPayload, JwtTokens } from "@interface";
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
    
    /// ---------------------- Validation Methods ---------------------- ///
    async validateCredentials(email: string, passwd: string): Promise<ValidatedUser>
    {
        const user             = await this.usersService.findOneByEmail(email),
              password_matches = await bcrypt.compare(passwd, user?.password);
        
        if ( !(user && password_matches) )
            return null;
        
        const { password, refresh_token, ...user_info } = user;

        return user_info;
    }

    async validateRefreshToken(user_id: number, refresh: Token): Promise<ValidatedUser>
    {
        const user            = await this.usersService.findOneById(user_id),
              refresh_matches = await bcrypt.compare(refresh, user?.refresh_token);
            
        if ( !(user && refresh_matches) )
            return null;

        const { password, refresh_token, ...user_info } = user;
        
        return user_info;
    }


    ///  ---------------------- Auth Methods ---------------------- /// 
    async signup(information: NewUserDTO)
    {
        const user   = await this.usersService.create(information);

        const tokens = this.getTokens({ sub: user.user_id, email: user.email });
        await this.usersService.updateRefreshToken(user.user_id, tokens.refresh_token);

        return tokens;
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


    /// ---------------------- Helper Methods ---------------------- ///
    private getTokens(payload: JwtPayload): JwtTokens
    {
        const access_token  = this.jwtService.sign(
            payload,
            {
                secret:    this.configService.get('JWT_ACCESS_TOKEN_SECRET'),
                expiresIn: this.configService.get('JWT_ACCESS_TOKEN_EXPIRES_IN')
            }
        );

        const refresh_token = this.jwtService.sign(
            payload,
            {
                secret:    this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
                expiresIn: this.configService.get('JWT_REFRESH_TOKEN_EXPIRES_IN')
            }
        );

        return { access_token, refresh_token };
    }
}
