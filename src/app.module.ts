import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/users'),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
