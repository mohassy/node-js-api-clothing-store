const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute =  require("./routes/auth");
dotenv.config();

app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection successful!"))
  .catch((err) => {
    console.log(err);
  });
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
