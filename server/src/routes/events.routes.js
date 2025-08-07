import express from "express";
import {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/events.controller.js";

const router = express.Router();
import { upload } from "../middlewares/multer.middleware.js";

router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.post("/", upload.fields([{ name: "image", maxCount: 1 }]), createEvent); // expects only 'image' field in form-data
router.patch(
  "/:id",
  upload.fields([{ name: "image", maxCount: 1 }]),
  updateEvent
); // for updating event image
router.delete("/:id", deleteEvent);

export default router;
