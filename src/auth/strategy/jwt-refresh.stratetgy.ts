import { JwtPayload } from "@interface";
import { ForbiddenException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";


@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh')
{
    constructor( configService: ConfigService )
    {
        super({
            jwtFromRequest:   ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey:      configService.get('JWT_REFRESH_TOKEN_SECRET')
        })
    }

    validate(request: Request, validation_payload: JwtPayload)
    {
        const refresh_token = request?.get('authorization')?.replace('Bearer', '').trim();

        if ( !refresh_token )
            throw new ForbiddenException(`Unable to obtain a refresh token`);

        return {
            ...validation_payload,
            refresh_token
        }
    }
}