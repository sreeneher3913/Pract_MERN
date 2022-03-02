const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let BookID = null;
let BookName = null;

app.post("/create", (req, res) => {
  BookID = req.body.BookID;
  BookName = req.body.BookName;
  console.log("-----create----");
  console.log(req.body, BookID);
  console.log("-----create----");
});

//Posting msg from node to react
app.get("/api", (req, res) => {
  res.json({
    message: "Hello this is server!",
    bookID: BookID,
    bookName: BookName,
  });
});

//Port is Listening
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
