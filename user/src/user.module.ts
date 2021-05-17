import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { UserController } from './user.controller';
import { UserService } from './services/user.service';
import { ConfigService } from './services/config.service';
import { Connection, createConnection } from 'typeorm';
import { User } from './entity/user.entity';

const databaseProviders = {
  provide: Connection,
  useFactory: async (configService: ConfigService) => {
    return createConnection({
      type: 'postgres',
      host: configService.get('databaseHost'),
      port: configService.get('databasePort'),
      username: configService.get('databaseUser'),
      password: configService.get('databasePass'),
      database: configService.get('databaseName'),
      entities: [User],
      migrations: ['migrations/*{.ts,.js}'],
      synchronize: true,
      logging: false,
    });
  },
  inject: [ConfigService]
};

@Module({
  exports: [databaseProviders],
  controllers: [UserController],
  providers: [
    UserService,
    ConfigService,
    {
      provide: 'MAILER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const mailerServiceOptions = configService.get('mailerService');
        return ClientProxyFactory.create(mailerServiceOptions);
      },
      inject: [ConfigService],
    },
    databaseProviders
  ],
})
export class UserModule { }
