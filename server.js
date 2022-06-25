const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');

const messagesHandler = require('./routes/messages')


const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true}))

app.use(express.static(path.join(__dirname, 'public')));
app.use('/messages', messagesHandler)




app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

// app.get("/favicon.ico", (request, response) => {
//   response.sendStatus(501)
// })



app.listen(3000, () => {
   console.log("Listening on port 3000")
  });
