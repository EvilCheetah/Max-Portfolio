import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDTO } from './create-auth.DTO';


export class UpdateAuthDTO extends PartialType(CreateAuthDTO) {}