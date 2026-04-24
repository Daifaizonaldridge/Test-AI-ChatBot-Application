import express from "express";
import { aiGenerate } from "./aiGenerate.js";
const app = express();

//middleware
app.use(express.json());


//API endpoint 1: get
app.get("/", (req, res) => {
  res.send("Hello World");
});

//API endpoint 2: post (AI)
app.post("/ai-generate", aiGenerate);

//application is running (port: 3000)
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});






