import { Transport } from '@nestjs/microservices';

export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {
      port: process.env.USER_SERVICE_PORT,
    };
    this.envConfig.baseUri = process.env.BASE_URI;
    this.envConfig.gatewayPort = process.env.API_GATEWAY_PORT;
    this.envConfig.databaseHost = process.env.USER_DB_HOST;
    this.envConfig.databasePort = process.env.USER_DB_PORT;
    this.envConfig.databaseUser = process.env.USER_DB_USER;
    this.envConfig.databasePass = process.env.USER_DB_PASS;
    this.envConfig.databaseName = process.env.USER_DB_NAME;
    this.envConfig.mailerService = {
      options: {
        port: process.env.MAILER_SERVICE_PORT,
        host: process.env.MAILER_SERVICE_HOST,
      },
      transport: Transport.TCP,
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
