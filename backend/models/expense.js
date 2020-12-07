import mongoose from 'mongoose';

const expenseSchema  = new mongoose.Schema({
    description : {
        type: String,
        required: true,
    },

    amount : {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true,
    },

    time : {
        type: String,
        required: true,
    }
})


const Expense = mongoose.model('expense', expenseSchema);

export default Expense;
