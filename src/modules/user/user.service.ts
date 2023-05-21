import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '~/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>
  ) {}
  async create(user: User): Promise<User> {
    const res = await this.userModel.create(user);
    return res;
  }
  public async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id);

    if (user) return user;
    throw new NotFoundException('User not found.');
  }
}
