var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/users", (req, res) => {
  mongoClient.connect(connectionString).then((clientObject) => {
    var database = clientObject.db("todo");
    database
      .collection("users")
      .find({})
      .toArray()
      .then((documents) => {
        res.send(documents);
        res.end();
      });
  });
});

app.post("/register", (req, res) => {
  var user = {
    UserId: req.body.UserId,
    UserName: req.body.UserName,
    Password: req.body.Password,
    Mobile: req.body.Mobile,
  };
  mongoClient.connect(connectionString).then((clientObject) => {
    var database = clientObject.db("todo");
    database
      .collection("users")
      .insertOne(user)
      .then(() => {
        console.log(" User Registered.. ");
        res.end();
      });
  });
});

app.listen(4040);
console.log(`Server started : http://127.0.0.1:4040`);
