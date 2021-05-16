import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from './config.service';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) { }

  public createToken(userId: string) {
    const accessExp = this.configService.get('ACCESS_EXP')
    const refreshExp = this.configService.get('REFRESH_EXP')
    const accessToken = this.jwtService.sign({ userId }, { expiresIn: accessExp })
    const refreshToken = this.jwtService.sign({ userId }, { expiresIn: refreshExp })
    return {
      accessToken,
      refreshToken,
    }
  }

  public async decodeToken(token: string) {
    return this.jwtService.decode(token)
  }
}
