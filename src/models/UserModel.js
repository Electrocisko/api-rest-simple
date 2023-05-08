import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from 'bcryptjs';

const userCollection = 'users';

const userSchema = new Schema({
    userName: {
        type: String,
        lowercase: true,
        required: true
    },
    userEmail: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    userPassword: {
        type: String,
        required: true
    },
    tokenConfirm: {
        type: String,
        default: null
    },
    countConfirmed: {
        type: Boolean,
        default: false
    }
})

userSchema.pre('save',  async function(next){
    const user = this
    if(!user.isModified('userPassword')) return next()
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.userPassword, salt);
        user.userPassword = hash;

    } catch (error) {
        console.log(error)
        next()
    }
})

userSchema.methods.validatePassword = async function(canditePassword) {
        return await bcrypt.compare(canditePassword, this.userPassword)
}

export const Users = mongoose.model(userCollection,userSchema)