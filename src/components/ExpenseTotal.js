import React, { useContext, dispatch, } from 'react';
import { AppContext } from '../context/AppContext';
import Budget from './Budget';
 
const ExpenseTotal = () => {
	const { expenses, currency, val } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	if(val>Budget) {
		alert("You cannot Spend more than the budget that is allocated!");
	}
	else {
		dispatch({
			type: 'Expense_Toatal',
			payload: val,
		})

	return (
		<div className='alert alert-primary'>
			<label style={{ marginLeft: "2rem" }}>{currency}</label> <span>Spent so far: {currency}{totalExpenses}</span>
		</div>
	)
}};

export default ExpenseTotal;
