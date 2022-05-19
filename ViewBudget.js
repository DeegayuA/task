import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Income: {props.budget} LKR</span>
			<button type='button' class='btn btn-dark' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;
