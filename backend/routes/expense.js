import Router from 'express'

const route = Router();

import { GET_EXPENSES, POST_EXPENSE, GET_EXPENSE } from '../controllers/expense.js'

route.get('/', GET_EXPENSES );
route.post('/', POST_EXPENSE);
route.get('/:id', GET_EXPENSE);

export default route;