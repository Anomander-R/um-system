import mongoose from "mongoose";

const PermissionSchema = new mongoose.Schema({
    code: {
      type: String,
      trim: true,
      unique: "Code already exists!",
      required: "Userame is required",
    },
    description: {
        type: String,
        trim: true,
        required: "Description is required",
      },
    created: {
      type: Date,
      default: Date.now,
    }
});

export default mongoose.model("Permission", PermissionSchema);