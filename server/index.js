const express = require("express");
const app = express();
const port = 5000;
const connectDB = require("./models/connectdb");
const userUpload = require("./routes/route");
const cors = require("cors");

app.use(cors());

app.use("/user", userUpload);

connectDB();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
