import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { Public } from './auth/decorators/public.decorator'

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Public()
  @Get('api/')
  getProtectedHello(): string {
    return this.appService.getHello()
  }

  @Get('api/protected')
  getTest(): string {
    return this.appService.getHello()
  }
}
