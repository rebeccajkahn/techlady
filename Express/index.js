const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser');


app = express()

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


data = [{"name": "book"},{"name": "book2"}]

app.get('/books.json', function (req, res) {
  res.send(data)
})

app.post('/booksPost', function (req, res) {
  newdata = {"name": "added by api"}
  data.push(newdata)
  res.send(data) 
})

app.post('/booksPost2',  function (req, res) {
	console.log(req.body)
  data.push(req.body)
  res.send(data) 
})

app.listen(3002, function () {
  
})