import { Injectable } from '@nestjs/common';

import { CreateModels3DDTO } from './dto/create-models-3d.dto';
import { UpdateModels3DDTO } from './dto/update-models-3d.dto';


@Injectable()
export class Models3DService
{
    create(createModels3DDTO: CreateModels3DDTO)
    {
        return 'This action adds a new models3D';
    }

    findAll()
    {
        return `This action returns all models3D`;
    }

    findOne(model_3d: number)
    {
        return `This action returns a #${model_3d} models3D`;
    }

    update(model_3d: number, updateModels3DDTO: UpdateModels3DDTO)
    {
        return `This action updates a #${model_3d} models3D`;
    }

    remove(model_3d: number)
    {
        return `This action removes a #${model_3d} models3D`;
    }
}
