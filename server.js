const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

const posts = require("./backend/routes/posts");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.MONGO_ATLAS_USER +
      ":" +
      process.env.MONGO_ATLAS_PASSWORD +
      "@node-rest-api-aulzl.mongodb.net/phcmsx?retryWrites=true",
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Couldn't connect to MongoDB"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PUT, OPTIONS"
  ),
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Request-With, Authorization, Origin, Accept, Content-Type"
    ),
    res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/posts", posts);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
