import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

import { JwtAuthGuard } from '@guard';
import { validationSchema } from '@config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { Models3DModule } from './models-3d/models-3d.module';


@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, validationSchema }),
        PrismaModule,
        
        Models3DModule,
        UsersModule,
        AuthModule,
    ],
    providers: [
        { provide: APP_GUARD, useClass: JwtAuthGuard }
    ]
})
export class AppModule {}
