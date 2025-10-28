import dotenv from "dotenv";
import express from "express";
import connectDB from "./configs/db.js";
import admin from "./routes/admin.js";
import blog from "./routes/blog.js";
import newsletter from "./routes/newsletter.js";
import teammember from "./routes/teammember.js";
import opportunity from "./routes/opportunity.js";
import event from "./routes/event.js";
import biopediascientistsketchphoto from "./routes/biopediascientistsketchphoto.js";
import biopediascientistsketchmeme from "./routes/biopediascientistsketchmeme.js";

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
app.use("/teammember", teammember);
app.use("/opportunity", opportunity);
app.use("/event", event);
app.use("/biopediascientistsketchphoto", biopediascientistsketchphoto);
app.use("/biopediascientistsketchmeme", biopediascientistsketchmeme);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
