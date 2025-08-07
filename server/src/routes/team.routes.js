import express from "express";
import {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
} from "../controllers/team.controller.js";

const router = express.Router();
import { upload } from "../middlewares/multer.middleware.js";

router.get("/", getAllTeams);
router.get("/:id", getTeamById);
router.post("/", upload.single("photoUrl"), createTeam); // expects 'photoUrl' field in form-data
router.patch("/:id", upload.single("photoUrl"), updateTeam); // for updating team member photo
router.delete("/:id", deleteTeam);

export default router;
