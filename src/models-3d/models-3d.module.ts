import { Module } from '@nestjs/common';
import { Models3DService } from './models-3d.service';
import { Models3DController } from './models-3d.controller';


@Module({
  controllers: [Models3DController],
  providers:   [Models3DService]
})
export class Models3DModule {}
