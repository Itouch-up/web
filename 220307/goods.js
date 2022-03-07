var express = require('express');
var router = express.Router();
 
const goodsRouter = require('./routes/goods');

app.use('/goods',goodsRouter);
module.exports = router;