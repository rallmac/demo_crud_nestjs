import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
export declare class CitiesService {
    private citiesRepository;
    constructor(citiesRepository: Repository<City>);
    create(createCityDto: CreateCityDto): Promise<City>;
    findAll(): Promise<City[]>;
    getCityById(id: number): Promise<City>;
    findOne(id: number): Promise<City>;
    update(id: number, updateCityDto: UpdateCityDto): Promise<City>;
    remove(id: number): Promise<void>;
}
