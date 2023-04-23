import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: Logger,
  ) {}

  @Get()
  getHello(): string {

    this.logger.log('Calling getHello()', AppController.name);
    this.logger.debug('Calling getHello()', AppController.name);
    this.logger.verbose('Calling getHello()', AppController.name);
    this.logger.warn('Calling getHello()', AppController.name);

    try {
      throw new Error();
    } catch (e) {
      this.logger.error('Calling getHello()', e.stack, AppController.name);
    }

    return this.appService.getHello();
  }
}
