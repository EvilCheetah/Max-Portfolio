import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { Models3DModule } from './models-3d/models-3d.module';


@Module({
    imports: [
        PrismaModule,
        Models3DModule,
    ]
})
export class AppModule {}
