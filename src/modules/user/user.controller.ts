import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '~/schemas/user.schema';
import { CreateUserDto } from '~/dto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createBook(@Body() user: CreateUserDto): Promise<User> {
    return this.userService.create(user);
  }
  @Get('/:userId')
  public findUserById(@Param('userId') userId: string) {
    return this.userService.findById(userId);
  }
}
