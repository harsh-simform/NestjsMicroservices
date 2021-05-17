import { Controller, HttpStatus, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { UserService } from './services/user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject('MAILER_SERVICE') private readonly mailerServiceClient: ClientProxy,
  ) {}
}
