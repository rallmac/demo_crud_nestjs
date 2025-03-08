import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * AppController is the main controller for handling incoming requests
 * and returning responses in the application.
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
