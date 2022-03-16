const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

app.get('/mongodb', async (req, res) => {
    await mongoose.connect('mongodb://localhost/voyage', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const { Schema } = mongoose;
    const goodsSchema = new Schema({
        goodsId: {
            type: Number,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
        thumbnailUrl: {
            type: String
        },
        category: {
            type: String
        },
        price: {
            type: Number
        }
    });

    let Goods = mongoose.model("Goods", goodsSchema)

		await Goods.create({
        goodsId: 1,
        name: "맛있는 저녁",
        thumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRQ3NDs5bjulPr3JaXJzP7DH3Y-71WX9wzQ7N8XD9KLUHjT6L&usqp=CAc",
        category: "food",
        price: 15000
    });

		res.send('ok');
})

const connect = require("./schemas");
connect();

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