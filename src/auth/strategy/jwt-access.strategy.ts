import { JwtPayload } from "@interface";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersService } from "src/users/users.service";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt-access')
{
    constructor(
        private readonly configService: ConfigService,
        private readonly usersService:  UsersService
    )
    {
        super({
            jwtFromRequest:   ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey:      configService.get('JWT_ACCESS_TOKEN_SECRET')
        });
    }

    validate(validation_payload: JwtPayload)
    {
        return this.usersService.findOneBy({ email: validation_payload?.email })
    }
}