import { Body, Controller, Delete, Get, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    return this.usersService.create(userData);
  }

  @Delete()
  deletaAllUsers() {
    return this.usersService.deleteAll();
  }
}
