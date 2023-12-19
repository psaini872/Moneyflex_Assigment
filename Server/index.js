import express from 'express';
import mongoose from 'mongoose';
import user from './model/User.js';
import cors from 'cors';

const app = express();
const port = 4000;
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

const db =
  'mongodb+srv://pranshusaini872:Saini872@cluster0.lxy4dyz.mongodb.net/?retryWrites=true&w=majority';

const main = async () => {
  const con = await mongoose.connect(db);
  console.log('scc connect to db');
};
main().catch((err) => console.log(err));

// MAIN ROUTE

// app.use('/api/v1/food', foodRouter);
// app.use('/api/v1/user', userRouter);

app.post('/api/v1/user', async (req, res) => {
  console.log(req.body);
  const newUser = await user.create(req.body);
  console.log(newUser);
  res.status(200).json({ massage: 'sucss' });
});

app.listen(port, () => {
  console.log(`App running on Port ${port}`);
});
