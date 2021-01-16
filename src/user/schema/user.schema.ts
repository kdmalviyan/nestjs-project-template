import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema(
    {
        timestamps: true,
    }
)
export class User {
    _id: string;
    @Prop()
    firstName: string;
    @Prop()
    lastName: string;
    @Prop({
        unique: true
    })
    email: string;
    @Prop({
        unique: true,
        required: true
    })
    username: string;
    @Prop({
        required: true
    })
    password: string;
    @Prop()
    securityToken: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
