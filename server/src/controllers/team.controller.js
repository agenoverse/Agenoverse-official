import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Team from "../models/team.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const getAllTeams = asyncHandler(async (req, res) => {
  const teams = await Team.find();
  res.status(200).json(new ApiResponse(200, teams, "Fetched all teams"));
});

export const getTeamById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const team = await Team.findById(id);
  if (!team) {
    throw new ApiError(404, "Team not found");
  }
  res.status(200).json(new ApiResponse(200, team, `Fetched team ${id}`));
});

export const createTeam = asyncHandler(async (req, res) => {
  const { name, role, bio } = req.body;
  let socialLinks = req.body.socialLinks;
  if (!name || !role) {
    throw new ApiError(400, "Name and role are required");
  }

  // Reconstruct socialLinks from flat keys (e.g., socialLinks.linkedin)
  if (!socialLinks || typeof socialLinks === "string") {
    socialLinks = {};
    Object.keys(req.body).forEach((key) => {
      if (key.startsWith("socialLinks.")) {
        const subKey = key.split(".")[1];
        socialLinks[subKey] = req.body[key];
      }
    });
    // If socialLinks was a stringified object, parse it
    if (
      typeof req.body.socialLinks === "string" &&
      Object.keys(socialLinks).length === 0
    ) {
      try {
        socialLinks = JSON.parse(req.body.socialLinks);
      } catch (err) {
        socialLinks = {};
      }
    }
  }

  // Handle photo upload
  let photoUrl = "";
  if (req.file) {
    const cloudinaryResult = await uploadOnCloudinary(req.file.path);
    photoUrl = cloudinaryResult.secure_url;
  }

  const team = await Team.create({
    name,
    role,
    bio,
    photoUrl,
    socialLinks,
  });

  res.status(201).json(new ApiResponse(201, team, "Team created successfully"));
});

export const updateTeam = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const team = await Team.findById(id);
  if (!team) {
    throw new ApiError(404, "Team not found");
  }

  // Check for duplicate team name if name is being updated
  if (req.body.name && req.body.name !== team.name) {
    const existingTeam = await Team.findOne({ name: req.body.name });
    if (existingTeam) {
      throw new ApiError(409, "Team with this name already exists");
    }
    team.name = req.body.name;
  }
  if (req.body.role) team.role = req.body.role;
  if (req.body.bio) team.bio = req.body.bio;
  if (
    req.body.socialLinks ||
    Object.keys(req.body).some((k) => k.startsWith("socialLinks."))
  ) {
    let socialLinks = req.body.socialLinks;
    // Reconstruct socialLinks from flat keys
    if (!socialLinks || typeof socialLinks === "string") {
      socialLinks = {};
      Object.keys(req.body).forEach((key) => {
        if (key.startsWith("socialLinks.")) {
          const subKey = key.split(".")[1];
          socialLinks[subKey] = req.body[key];
        }
      });
      // If socialLinks was a stringified object, parse it
      if (
        typeof req.body.socialLinks === "string" &&
        Object.keys(socialLinks).length === 0
      ) {
        try {
          socialLinks = JSON.parse(req.body.socialLinks);
        } catch (err) {
          socialLinks = {};
        }
      }
    }
    team.socialLinks = socialLinks;
  }

  // Handle photo update
  if (req.file) {
    const cloudinaryResult = await uploadOnCloudinary(req.file.path);
    team.photoUrl = cloudinaryResult.secure_url;
  }

  await team.save();
  res
    .status(200)
    .json(new ApiResponse(200, team, `Team ${id} updated successfully`));
});

export const deleteTeam = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const team = await Team.findByIdAndDelete(id);

  if (!team) {
    throw new ApiError(404, "Team not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, team, `Team ${id} deleted successfully`));
});
