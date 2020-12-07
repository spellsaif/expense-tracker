import Expense from '../models/expense.js';

export const GET_EXPENSES = async ( req, res ) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch(err) {
        res.json({message: erro });
    }
}

export const GET_EXPENSE = async ( req, res ) => {
    try {
        const { id } = req.params.id;
        const expense = await Expense.findById(id);
        res.json(expense);
    } catch(err) {
        res.json({message: err});
    }
    
}

export const POST_EXPENSE = async ( req, res ) => {
    try{
        const expense = new Expense({...req.body});
        expense.save();
    } catch(err) {
        res.json({message:"Error!"});
    }
}