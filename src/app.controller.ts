import { Controller, Get } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';


@Controller()
@ApiUseTags('Root')
export class AppController {
  

  @Get()
  index() {
    return 'index'
  }
}
