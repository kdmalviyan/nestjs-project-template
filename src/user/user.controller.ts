import { Body, Controller, Get, Param, Patch, Post, Req, Request, Response } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schema/user.schema';
import { UserService } from './user.service';
@Controller('user')
@ApiTags('User')
export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    listUsers(@Req() request: Request): Promise<User[]> {
        const users = this.userService.findAll();
        return users;
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        const createdUser = this.userService.create(createUserDto)
        return createdUser;
    }

    @Get('/:id')
    getUserById(@Req() request: Request, @Param('id') id: number): User {
        const user = this.userService.findOne({id: id})
        return new User();
    }

    @Patch('/:id')
    updateUser(@Req() request: Request, @Param('id') id: number): User {
        return new User();
    }
}
