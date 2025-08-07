import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Journey from "../models/journey.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const getAllJourneys = asyncHandler(async (req, res) => {
  const journeys = await Journey.find();
  res.status(200).json(new ApiResponse(200, journeys, "Fetched all journeys"));
});

export const getJourneyById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const journey = await Journey.findById(id);
  if (!journey) {
    throw new ApiError(404, "Journey not found");
  }
  res.status(200).json(new ApiResponse(200, journey, `Fetched journey ${id}`));
});

export const createJourney = asyncHandler(async (req, res) => {
  const { title, description, date } = req.body;
  if (!title || !description || !date) {
    throw new ApiError(400, "Title, description, and date are required");
  }

  // Handle image upload
  let imageUrl = "";
  if (req.file) {
    const cloudinaryResult = await uploadOnCloudinary(req.file.path);
    imageUrl = cloudinaryResult.secure_url;
  }

  const journey = await Journey.create({
    title,
    description,
    date,
    imageUrl,
  });

  res
    .status(201)
    .json(new ApiResponse(201, journey, "Journey created successfully"));
});

export const updateJourney = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const journey = await Journey.findById(id);
  if (!journey) {
    throw new ApiError(404, "Journey not found");
  }

  // Update only provided fields
  if (req.body.title) journey.title = req.body.title;
  if (req.body.description) journey.description = req.body.description;
  if (req.body.date) journey.date = req.body.date;

  // Handle image update
  if (req.file) {
    const cloudinaryResult = await uploadOnCloudinary(req.file.path);
    journey.imageUrl = cloudinaryResult.secure_url;
  }

  await journey.save();
  res
    .status(200)
    .json(new ApiResponse(200, journey, `Journey ${id} updated successfully`));
});

export const deleteJourney = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedJourney = await Journey.findByIdAndDelete(id);

  if (!deletedJourney) {
    throw new ApiError(404, "Journey not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, null, `Journey ${id} deleted successfully`));
});
