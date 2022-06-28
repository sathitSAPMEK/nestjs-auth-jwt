import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/generate-token')
  async generateToken() {
    return this.usersService.generateToken();
  }
}
