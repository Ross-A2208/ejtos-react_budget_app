import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

        
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
    };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

        const DeleteExpense = () => {
            const expense = {
                name: delete_expense,
                cost: -10,
        }};
            dispatch({
                type: 'DELETE_EXPENSE',
                payload: props.cost,
            
            });
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><img src="https://pngimg.com/uploads/plus/plus_PNG121.png" alt="-" width="48" height="48" onClick={event=> increaseAllocation(props.name)}></img></td>
        <td><img src="https://pngimg.com/uploads/minus/minus_PNG60.png" alt="-" width="48" height="48" onClick={event=> DeleteExpense(props.dname)}></img></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
        );


export default ExpenseItem;
