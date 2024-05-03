import { Schema, model } from 'mongoose';
import type { IUser } from '../types';

const UserSchema = new Schema({
    fullName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        minLength : 6,
        required : true
    },
    profilePic : {
        type : String,
        default : ''
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    isSeller : {
        type : Boolean,
        default : false
    },
    token : {
        type : String,
        default : ''
    },
    tokenExpireDate : {
        type : Date,
        default : ''
    },
    isBan : {
        type : Boolean,
        default : false
    }

}, {timestamps : true});

const User = model<IUser>('User', UserSchema);

export default User;