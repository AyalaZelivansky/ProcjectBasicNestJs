import { Controller, Get, Param, Post, Body, Res, Delete, Put } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from '../modells/user.sechma'
import { Response } from 'express';

@Controller('user')
export class UserController {

    constructor(private usersService: UsersService) { }

    @Get()
    async getUsers(@Res() res: Response) {
        const users = await this.usersService.getUsers();
        res.json(users)
    }


    @Get(':userID')
    async getUser(@Param('userID') userID: string, @Res() res: Response) {
        const user = await this.usersService.getUser(userID);
        res.json(user)
    }

    // @Post()
    // async create(@Body() createUser: User) {

    //     this.usersService.create(createUser);
    // }

    @Post()
    async create(@Body() createUser: User, @Res() res: Response) {

        try {

            var users = await this.usersService.create(createUser)
            res.status(200).json({ status: 200, data: users, message: "Succesfully" });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'internal server error' });

        }
    }

    @Delete(':userID')
    async delete(@Param('userID') userID: string, @Res() res: Response) {

        try {
            const deleteUser = await this.usersService.delete(userID);
            if (!deleteUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.json({ message: 'User deleted successfully' });
        } catch (error) {



            console.error(error);
            res.status(500).json({ message: 'Failed to delete user' });
        }
    }

    @Put(':userID')
    async update(@Param('userID') userID: string, @Body() user: User, @Res() res: Response) {
        console.log(user);

        try {
            var users = await this.usersService.update(userID, user)
            return res.status(200).json({ status: 200, data: users, message: "Succesfully" });
        } catch (error) {

            return res.status(400).json({ status: 400, message: error.message });

        }
    }
}
