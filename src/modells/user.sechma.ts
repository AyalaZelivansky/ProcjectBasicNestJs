import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type UserDocument = User & Document;

// export class UserI {
//     name: string;
//     age: number;
//     pId: string;
//   }

@Schema()
export class User {
    // @Prop({
    //     type: String,
    //     unique: true,

    // })
    @Prop()
    userId: string;

    @Prop({ required: false })
    firstName: string;

    @Prop({ required: false })
    lastName: string;


}

export const UserSchema = SchemaFactory.createForClass(User);
