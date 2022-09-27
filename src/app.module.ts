import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { Models3DModule } from './models-3d/models-3d.module';
import { UsersModule } from './users/users.module';


@Module({
    imports: [
        PrismaModule,
        Models3DModule,
        UsersModule,
    ]
})
export class AppModule {}
