const express = require('express')
const router = express.Router()
const Message = require('../models/message.js')
//import {Message} from '../models/message'
// const welcomeMessage = {
//     id: 0,
//     from: "Bart",
//     text: "Welcome to CYF chat system!",
//   };
  const welcomeMessage = new Message(0, 'Bart', 'welcome to CYF chat system');



  //This array is our "data store".
  //We will start with one message in the array.
  //Note: messages will be lost when Glitch restarts our server.
  const messages = [welcomeMessage];
  let availableId = 1; 



// router.get('/', function(req, res, next){
//     res.send('respond with a aresource')
// })

router.get("/", function (request, response) {
    response.send(messages);
  });
  
router.post("/messages", function (request, response) {
      const {from, text} = request.body;
      const id= availableId++;
    const newMessage= new Message(id, from, text);
//   newMessage.id = availableId++;

if(!newMessage.from || !newMessage.text){
    response.sendStatus(400);
    return;
}





    messages.push(newMessage);
    response.sendStatus(201)
  });


  module.exports = router