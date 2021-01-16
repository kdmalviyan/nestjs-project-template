import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class UserService {
  private readonly users: User[];
  constructor(@InjectModel('User') private userModel: Model<UserDocument>,
    @InjectConnection() private connection: Connection) {
  }
  async findOne(condition): Promise<User | undefined> {
    return this.userModel.findOne(condition).exec();;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
