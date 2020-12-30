import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import AuthRouter from './routes/authRoutes';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

const dbURI = process.env.MONGO_URI!;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log('✔ connected to mongoDB');
    app.listen(3000, () => {
      console.log(`✔ server started on port 3000`);
    });
  })
  .catch((err) => {
    console.log('failed to connect to mongodb');
  });

app.use('/', AuthRouter);
app.get('/smoothies', (req, res) => res.render('smoothies'));
