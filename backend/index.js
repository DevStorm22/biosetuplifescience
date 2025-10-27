import dotenv from "dotenv";
import express from "express";
import connectDB from "./configs/db.js";
import admin from "./routes/admin.js";
import blog from "./routes/blog.js";
import newsletter from "./routes/newsletter.js";

dotenv.config({ path: "./configs/.env" });

const app = express();
const port = process.env.PORT;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/admin", admin);
app.use("/blog", blog);
app.use("/newsletter", newsletter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
