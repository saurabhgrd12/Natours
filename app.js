const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
//Middlewares
// console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  console.log('Hello from the middleware........');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.get('/', (req, res) => {
//   // res.status(200).send('Hello from server side!');
//   res
//     .status(200)
//     .json({ message: 'hello from the server side', app: 'Natours' });
// });
// app.post('/', (req, res) => {
//   res.send(`You can post to this endpoint.....`);
// });

//route Handlers

// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

//routers

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
//start server
module.exports = app;
