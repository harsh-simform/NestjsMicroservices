import { Injectable } from '@nestjs/common';

import { ConfigService } from './config.service';
import { IUser } from '../interfaces/user.interface';
import { IUserLink } from '../interfaces/user-link.interface';

@Injectable()
export class UserService {
  constructor(
    private readonly configService: ConfigService,
  ) {}

  public async searchUser(params: { email: string }): Promise<IUser[]> {
    
  }

  public async searchUserById(id: string): Promise<IUser> {
    
  }

  public async updateUserById(
    id: string,
    userParams: { is_confirmed: boolean },
  ): Promise<IUser> {
    
  }

  public async createUser(user: IUser): Promise<IUser> {
    
    return await userModel.save();
  }

  public async createUserLink(id: string): Promise<IUserLink> {
    
  }

  public async getUserLink(link: string): Promise<IUserLink[]> {
    
  }

  public async updateUserLinkById(
    id: string,
    linkParams: { is_used: boolean },
  ): Promise<IUserLink> {
    
  }

  public getConfirmationLink(link: string): string {
    return `${this.configService.get('baseUri')}:${this.configService.get(
      'gatewayPort',
    )}/users/confirm/${link}`;
  }
}
