import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller('health')
@ApiTags('Health')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  check(): string {
    return this.appService.checkHealth();
  }
}
