import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { Models3DService } from './models-3d.service';
import { CreateModels3DDTO } from './dto/create-models-3d.dto';
import { UpdateModels3DDTO } from './dto/update-models-3d.dto';


@Controller('models-3d')
export class Models3DController
{
    constructor(private readonly models3DService: Models3DService) {}

    @Post()
    create(@Body() createModels3DDTO: CreateModels3DDTO)
    {
        return this.models3DService.create(createModels3DDTO);
    }


    @Get()
    findAll()
    {
        return this.models3DService.findAll();
    }


    @Get(':id')
    findOne(
        @Param('id', ParseIntPipe)
        model_3d: number
    )
    {
        return this.models3DService.findOne(model_3d);
    }


    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)
        model_3d: number, 
        
        @Body()
        updateModels3DDTO: UpdateModels3DDTO
    )
    {
        return this.models3DService.update(model_3d, updateModels3DDTO);
    }

    
    @Delete(':id')
    remove(
        @Param('id', ParseIntPipe)
        model_3d: number
    )
    {
        return this.models3DService.remove(model_3d);
    }
}
