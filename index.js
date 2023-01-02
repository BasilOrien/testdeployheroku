import express from "express";
const app = express();
const port = process.env.port || 3000
app.use("/", (req, res) => {
  res.status(200).send("Server Running OK 200");
});

app.listen(port, console.log(`Server created by Basil running on port :${port}`));
