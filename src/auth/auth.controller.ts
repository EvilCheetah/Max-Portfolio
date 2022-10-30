import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDTO } from './dto/create-auth.dto';
import { UpdateAuthDTO } from './dto/update-auth.dto';


@Controller('auth')
export class AuthController
{
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDTO: CreateAuthDTO)
  {
    return this.authService.create(createAuthDTO);
  }

  @Get()
  findAll()
  {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string)
  {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDTO: UpdateAuthDTO){
    return this.authService.update(+id, updateAuthDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
