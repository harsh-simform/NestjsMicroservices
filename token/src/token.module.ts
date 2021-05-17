import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TokenService } from './services/token.service';
import { JwtConfigService } from './services/jwt-config.service';
import { ConfigService } from './services/config.service';

@Module({
  imports: [
    ConfigService,
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
  ],
  providers: [TokenService, ConfigService],
})
export class TokenModule { }
