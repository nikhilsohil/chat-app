import mongoose, { Schema } from "mongoose";


// import bcrypt from "bcrypt";

const userschema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'],
            required: true
        },
        dob: {
            type: Date,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            required: true,
            default: new Date()
        }

    });
    // hash the password before saving it to the database


    // userschema.pre('save', function (next) {
    //     const user = this;
    //     if (user.isModified('password')) {
    //         user.password = bcrypt.hashSync(user.password, 10);
    //     }
    //     next();
    // });


    // compare the hashed password with the password provided in the request


    // userschema.methods.comparePassword = function (candidatePassword, callback) {
    //     bcrypt.compare(candidatePassword, this.password, callback);
    // };


export const User = new mongoose.model("user", userschema);
