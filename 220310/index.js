const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  console.log(req);
  next();
});

app.get('/', (req, res, next) => {
  res.send('Welcome Home');
});

app.listen(3000)
// app.get('/goods/list', (req, res) => {
//   res.send('상품 목록 페이지')
// })

// app.get('/goods/detail', (req, res) => {
//   res.send('상품 상세 페이지')
// })
const goodsRouter = require('./routes/goods')

app.use('/goods',goodsRouter)

// app.get('/user/login', (req, res) => {
//   res.send('로그인 페이지')
// })

// app.get('/user/register', (req, res) => {
//   res.send('회원가입 페이지')
// })

const userRouter = require('./routes/user');

app.use('/user',userRouter);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})