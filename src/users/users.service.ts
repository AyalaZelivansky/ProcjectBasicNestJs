import { Injectable, HttpException } from '@nestjs/common';
import { User, UserDocument } from '../modells/user.sechma'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) { }

    async getUsers() {
        return await this.userModel.find()
    }


    async getUser(userID: string) {
        console.log(userID);

        return await this.userModel.findOne({ userId: userID });

    }


    // async create(CreateUser: User) {
    //     return await this.userModel.create({ ...CreateUser });
    // }
    async create(CreateUser: User) {
        try {

            var users = await this.userModel.create(CreateUser);
            return users;

        } catch (error) {
            console.error(error);
        }

    }
    async delete(userID: string) {
        try {
            var deletedUser = await this.userModel.findOneAndDelete({ userId: userID });
            return deletedUser

        } catch (error) {
            console.error('Failed to delete user:', error);

        }

    }

    async update(userID: string, user: User) {
        try {

            const updatedUser = await this.userModel.findOneAndUpdate(
                { userId: userID },
                user,
                { new: true }
            );
            console.log(updatedUser);

            return updatedUser;

        } catch (error) {
            console.error('Failed to update user:', error);
        }
    }
}
