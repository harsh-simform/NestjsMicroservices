export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {
      port: process.env.TOKEN_SERVICE_PORT,
    };
    this.envConfig.ACCESS_EXP = process.env.ACCESS_EXP;
    this.envConfig.REFRESH_EXP = process.env.REFRESH_EXP;
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
