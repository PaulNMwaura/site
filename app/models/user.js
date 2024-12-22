import mongoose, { models, Schema } from "mongoose";
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new Schema ({
    userID: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: [String],
        default: ['user'],
    },
    location: {
        type: String,
        default: 'Unconfigured',
    },
    activeAccount: {
        type: Boolean,
        default: true,
    },

}, { timestamps: true });

userSchema.plugin(AutoIncrement, { inc_field: 'userID' });

const User = models.User || mongoose.model("User", userSchema);
export default User;