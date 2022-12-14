import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt-access.strategy';
import { JwtRefreshStrategy } from './strategy/jwt-refresh.stratetgy';


@Module({
    imports: [
        PassportModule,
        JwtModule.register({}),

        UsersModule
    ],
    controllers: [AuthController],
    providers:   [
        AuthService,

        LocalStrategy,
        JwtStrategy,
        JwtRefreshStrategy
    ]
})
export class AuthModule {}
