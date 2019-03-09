var http = require("http");
const app = require("./app");

//create a server object:
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}`)); //the server object listens on port 8080
