// filepath: /home/tobijah/Documents/mine2/src/cities/entities/city.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  population: number;
}