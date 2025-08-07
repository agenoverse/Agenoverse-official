import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
    },
    techStack: [
      {
        type: String,
        trim: true,
      },
    ],
    imageUrl: {
      type: String,
      required: false,
      trim: true,
    },
    liveUrl: {
      type: String,
      required: false,
      trim: true,
    },
    githubUrl: {
      type: String,
      required: false,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Desktop Development",
        "Web Development",
        "Mobile Development",
        "Data Science",
        "AI/ML",
        "Other",
      ],
      trim: true,
    },
    dateStarted: {
      type: Date,
      required: false,
    },
    dateCompleted: {
      type: Date,
      required: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
