import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./db/index.js";
import { app } from "./app.js";

console.log("ENV: ", process.env.MONGODB_URI);
connectDB()
  .then(
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at PORT: ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log("MONGO DB connection FAILDED !!!", err);
  });
