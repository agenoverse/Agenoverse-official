// {
//   name: String,
//   role: String,
//   bio: String,
//   photoUrl: String,
//   socialLinks: {
//     linkedin: String,
//     github: String,
//     twitter: String
//   }
// }

import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    photoUrl: {
      type: String,
      trim: true,
    },
    socialLinks: {
      linkedin: { type: String, required: false, trim: true },
      github: { type: String, required: false, trim: true },
      twitter: { type: String, required: false, trim: true },
    },
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model("Team", teamSchema);

export default Team;
