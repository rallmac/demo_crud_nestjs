import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';


@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private citiesRepository: Repository<City>,
  ) {}

  create(createCityDto: CreateCityDto): Promise<City> {
    const city = this.citiesRepository.create(createCityDto);
    return this.citiesRepository.save(city);
  }

  findAll(): Promise<City[]> {
    return this.citiesRepository.find();
  }

  async getCityById(id: number): Promise<City> {
    const city = await this.citiesRepository.findOneBy({ id });
    if (!city) {
      throw new Error(`City with id ${id} not found`);
    }
    return city;
  }

  async findOne(id: number): Promise<City> {
    const city = await this.citiesRepository.findOneBy({ id });
    if (!city) {
      throw new Error(`City with id ${id} not found`);
    }
    return city;
  }

  async update(id: number, updateCityDto: UpdateCityDto): Promise<City> {
    await this.citiesRepository.update(id, updateCityDto);
    const updatedCity = await this.citiesRepository.findOneBy({ id });
    if (!updatedCity) {
      throw new Error(`City with id ${id} not found`);
    }
    return updatedCity;
  }

  async remove(id: number): Promise<void> {
    await this.citiesRepository.delete(id);
  }
}
