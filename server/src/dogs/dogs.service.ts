import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dog } from './dog.entity';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog)
    private readonly dogRepository: Repository<Dog>,
  ) {}

  findAll(): Promise<Dog[]> {
    return this.dogRepository.find();
  }

  findOne(id: number): Promise<Dog> {
    return this.dogRepository.findOne({ where: { id } });
  }

  create(dog: Partial<Dog>): Promise<Dog> {
    const newDog = this.dogRepository.create(dog);
    return this.dogRepository.save(newDog);
  }

  async update(id: number, updateData: Partial<Dog>): Promise<Dog> {
    await this.dogRepository.update(id, updateData);
    return this.dogRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.dogRepository.delete(id);
  }
}
