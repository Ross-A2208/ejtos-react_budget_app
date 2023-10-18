import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { currency,budget,dispatch,expenses } = useContext(AppContext);
        
	const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);
		
		if(val<totalExpenses) {
			alert("You cannot reduce the budget that is already allocated!");
		} else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
	}
    return (
<div className='alert alert-secondary'>
<span>Budget: £{Budget}</span>
<label style={{ marginLeft: "2rem" }}>{currency}</label><input type="number" step="10" value={changeBudget} onChange={handleBudgetChange}></input>
</div>
    );
    
};
export default Budget;
