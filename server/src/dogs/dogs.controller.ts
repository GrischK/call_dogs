import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from './dog.entity';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  findAll(): Promise<Dog[]> {
    return this.dogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Dog> {
    return this.dogsService.findOne(+id);
  }

  @Post()
  create(@Body() dog: Partial<Dog>): Promise<Dog> {
    return this.dogsService.create(dog);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dog: Partial<Dog>): Promise<Dog> {
    return this.dogsService.update(+id, dog);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.dogsService.delete(+id);
  }
}
