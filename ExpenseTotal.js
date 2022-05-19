import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='alert alert-dark p-4'>
			<span>Total Expenses: {total} LKR</span>
		</div>
	);
};

export default ExpenseTotal;
