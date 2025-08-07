import express from "express";
import {
  getAllJourneys,
  getJourneyById,
  createJourney,
  updateJourney,
  deleteJourney,
} from "../controllers/journey.controller.js";

const router = express.Router();
import { upload } from "../middlewares/multer.middleware.js";

router.get("/", getAllJourneys);
router.get("/:id", getJourneyById);
router.post("/", upload.single("image"), createJourney); // expects 'image' field in form-data
router.patch("/:id", upload.single("image"), updateJourney); // for updating journey image
router.delete("/:id", deleteJourney);

export default router;
