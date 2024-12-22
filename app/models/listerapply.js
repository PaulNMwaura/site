import mongoose, { models, Schema } from "mongoose";

const listerApplySchema = new Schema ({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    location: {
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
    schedule: {
        Monday: { start: String, end: String },
        Tuesday: { start: String, end: String },
        Wednesday: { start: String, end: String },
        Thursday: { start: String, end: String },
        Friday: { start: String, end: String },
        Saturday: { start: String, end: String },
        Sunday: { start: String, end: String },
    },
    status: {
        type: String,
        default: 'Pending',
    },

}, { timestamps: true });


const Lister = models.Lister || mongoose.model("Lister", listerApplySchema);
export default Lister;