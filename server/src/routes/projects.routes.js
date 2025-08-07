import express from "express";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projects.controller.js";

const router = express.Router();
import { upload } from "../middlewares/multer.middleware.js";

router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", upload.single("image"), createProject);
router.patch("/:id", upload.single("image"), updateProject);
router.delete("/:id", deleteProject);

export default router;
