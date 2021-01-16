import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [UserModule, AuthModule,
    MongooseModule.forRoot('mongodb://localhost/nemshek-eccom-app', { useNewUrlParser: true })],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService],
})
export class AppModule { }
