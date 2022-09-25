import { PartialType } from '@nestjs/mapped-types';
import { CreateModels3DDTO } from './create-models-3d.dto';


export class UpdateModels3DDTO extends PartialType(CreateModels3DDTO) {}