import React, { useState, useEffect } from 'react';
import ScheduleTable from '../ScheduleTable';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';

const SchedulePagination = ({ lastpage, setOffset }) => {
	return (
		<Pagination
			count={lastpage}
			defaultPage={1}
			onChange={(event, value) => {
				setOffset((value - 1) * 10);
			}}
		/>
	);
};

const UserClassHistory = () => {
	const [classes, setClasses] = useState([]);
	const [offset, setOffset] = useState(0);
	const [totalItem, setTotalItem] = useState(1);

	let token = localStorage.getItem('token');
	let navigate = useNavigate();

	useEffect(() => {
		if (token === null) {
			navigate('/login');
		}
		fetch(`http://127.0.0.1:8000/classes/history?offset=${offset}`, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((json) => {
				setClasses(json.results);
				setTotalItem(json.count);
			});
	}, [offset, token, navigate]);

	return (
		<>
			<h1>My Class History</h1>
			<ScheduleTable classes={classes} isUser={true} isHitory={true} />
			<SchedulePagination
				lastpage={Math.ceil(totalItem / 10)}
				offset={offset}
				setOffset={setOffset}
			/>
		</>
	);
};

export default UserClassHistory;
