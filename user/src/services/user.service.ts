import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';
@Injectable()
export class UserService {
  constructor(
    private readonly configService: ConfigService,
  ) {}
}
