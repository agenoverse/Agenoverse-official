import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Event from "../models/event.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const getAllEvents = asyncHandler(async (req, res) => {
  const events = await Event.find();
  res.status(200).json(new ApiResponse(200, events, "Fetched all events"));
});

export const getEventById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id);
  if (!event) {
    throw new ApiError(404, "Event not found");
  }
  res.status(200).json(new ApiResponse(200, event, `Fetched event ${id}`));
});

export const createEvent = asyncHandler(async (req, res) => {
  const { title, description, date, location, registrationLink, pastEvent } =
    req.body;
  if (!title || !description || !date || !location) {
    throw new ApiError(
      400,
      "Title, description, date, and location are required"
    );
  }

  // Handle image upload
  let imageUrl = "";
  if (req.files && req.files.image) {
    const cloudinaryResult = await uploadOnCloudinary(req.files.image[0].path);
    imageUrl = cloudinaryResult.secure_url;
  }

  const event = await Event.create({
    title,
    description,
    date,
    location,
    imageUrl,
    registrationLink,
    pastEvent,
  });

  res.status(201).json(new ApiResponse(201, event, "Event created"));
});

export const updateEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id);
  if (!event) {
    throw new ApiError(404, "Event not found");
  }

  // Update only provided fields
  if (req.body.title) event.title = req.body.title;
  if (req.body.description) event.description = req.body.description;
  if (req.body.date) event.date = req.body.date;
  if (req.body.location) event.location = req.body.location;
  if (req.body.registrationLink)
    event.registrationLink = req.body.registrationLink;
  if (typeof req.body.pastEvent !== "undefined")
    event.pastEvent = req.body.pastEvent;

  // Handle image update
  if (req.files && req.files.image) {
    const cloudinaryResult = await uploadOnCloudinary(req.files.image[0].path);
    event.imageUrl = cloudinaryResult.secure_url;
  }

  await event.save();
  res.status(200).json(new ApiResponse(200, event, `Event ${id} updated`));
});

export const deleteEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const event = await Event.findByIdAndDelete(id);

  if (!event) {
    throw new ApiError(404, "Event not found");
  }

  res.status(200).json(new ApiResponse(200, null, `Event ${id} deleted`));
});
