const express = require('express')
const app = express()
const port = 3000

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
  let name = req.query.name;
  res.render('test', {name});
})

app.get('/home', (req, res) => {
  res.render('index');
})
app.get('/detail', (req, res) => {
  res.render('detail')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})