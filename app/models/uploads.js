import mongoose, { models, Schema } from "mongoose";
const AutoIncrement = require('mongoose-sequence')(mongoose);

const uploadsSchema = new Schema ({
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User', // Reference to the User model
    //   required: true, // Ensure every image is linked to a user
    // },
    name: {
        type: String,
        required: true,
    },
    data: {
        type: Buffer,
        required: true,
    },
    contentType: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
const Uploads = models.Uploads || mongoose.model("Uploads", uploadsSchema);
export default Uploads;