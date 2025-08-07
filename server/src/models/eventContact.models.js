import mongoose from "mongoose";

const eventContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: false,
      trim: true,
    },
    source: {
      type: String,
      required: true,
      trim: true,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: false },
  }
);

const EventContact = mongoose.model("EventContact", eventContactSchema);

export default EventContact;
