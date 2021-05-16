import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TokenService } from './services/token.service';
import { JwtConfigService } from './services/jwt-config.service';

@Module({
  exports: [],
  imports: [
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
  ],
  providers: [TokenService],
})
export class TokenModule { }
