const app = require("./app");
const mongoose = require("mongoose");
//create a server object:
mongoose.connect(
  "mongodb+srv://dev:werguy@r@m2019@cluster0-9a5cn.mongodb.net/e-job?retryWrites=true",
  { useNewUrlParser: true },
  err => {
    if (err) return console.log("MongoDB connection failed");
    console.log("connected to mongoDB");
  }
);
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}`)); //the server object listens on port 8080
