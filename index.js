import express from "express";
const app = express();

app.use("/", (req, res) => {
  res.status(200).send("Server Running OK 200");
});

app.listen(3000, () => console.log("Server Running"));
