import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from 'src/user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import forFeatureDb from '../modells/for-feature.db'

@Module({
  imports: [MongooseModule.forFeature(forFeatureDb)],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService]

})
export class UsersModule {}
