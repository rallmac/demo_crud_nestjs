import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'tobijah',
      password: 'tobi2025@h45',
      database: 'demo',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CitiesModule,
  ],
})
export class AppModule {}