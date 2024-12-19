import express from 'express';
import path from 'path';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import booksRouter from './routes/books';
import coursesRouter from './routes/courses';

const app = express();
const port = 3000;

// Set the view engine to 'pug'
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/courses",coursesRouter);
app.use("/books",booksRouter);

app.get('/', (req, res) => {
  res.send('Hello from TypeScript Express!');
  //res.render('index', { title: 'Express' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});