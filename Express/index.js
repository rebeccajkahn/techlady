const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser');


app = express()

//allows for cross origin resource sharing, comment it out to get the error
app.use(cors())

//allows app to process input data correctly
app.use(bodyParser.json());


data = [{"name": "Joy of Cooking"},{"name": "Tropic of Cancer"}]

app.get('/books.json', function (req, res) {
  //sends data as a response to get request
  res.send(data)
})

app.post('/booksPost',  function (req, res) {
  //updates data to include new data
  data.push(req.body)
  //sends updated data as a response
  res.send(data) 
})

//starts the app on port 3002
app.listen(3002, function () {
  console.log("The application is running on port 3002. Visit localhost:3002/books.json to preview it")
})