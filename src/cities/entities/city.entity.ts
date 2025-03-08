import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Represents a city entity with its basic properties.
 */
@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  population: number;
}