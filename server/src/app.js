import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import eventsRouter from "./routes/events.routes.js";
import blogsRouter from "./routes/blogs.routes.js";
import projectsRouter from "./routes/projects.routes.js";
import servicesRouter from "./routes/services.routes.js";
import contactRouter from "./routes/contact.routes.js";
import teamRouter from "./routes/team.routes.js";
import journeyRouter from "./routes/journey.routes.js";
import eventContactRouter from "./routes/eventContact.routes.js";

// routes declaration
app.use("/api/v1/events", eventsRouter);
app.use("/api/v1/blogs", blogsRouter);
app.use("/api/v1/projects", projectsRouter);
app.use("/api/v1/services", servicesRouter);
app.use("/api/v1/contacts", contactRouter);
app.use("/api/v1/team", teamRouter);
app.use("/api/v1/journey", journeyRouter);
app.use("/api/v1/event-contact", eventContactRouter);

export { app };
