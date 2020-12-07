import express from 'express';
import mongoose from 'mongoose';
import expenseRoute from './routes/expense.js';

//PORT NUMBER
const PORT_NUMBER = 3000;

//DB URI
const DB_URI = `mongodb+srv://m001-student:m001-mongodb-basics@sandbox.nyjs8.mongodb.net/expenses?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use('/api', expenseRoute);
mongoose.connect(DB_URI, { useNewUrlParser: true })
    .then(app.listen(PORT_NUMBER, console.log('listening...')));

app.get('/', (req, res) => res.send('<h1>Welcome to Expense API'));

