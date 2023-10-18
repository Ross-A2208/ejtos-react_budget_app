import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { currency, expenses, budget } = useContext(AppContext);
 
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
           <label style={{ marginLeft: "2rem" }}>{currency}</label> <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
