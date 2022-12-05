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

const UserSchedule = () => {
	const [classes, setClasses] = useState([]);
	const [offset, setOffset] = useState(0);
	const [totalItem, setTotalItem] = useState(1);

	let token = localStorage.getItem('token');
	let navigate = useNavigate();

	useEffect(() => {
		if (token === null) {
			navigate('/login');
		}
		fetch(`http://127.0.0.1:8000/classes/schedule?offset=${offset}`, {
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
	}, [offset, token]);

	return (
		<>
			<h1>My Class Schedule</h1>
			<ScheduleTable classes={classes} isUser={true} isHitory={false} />
			<SchedulePagination
				lastpage={Math.ceil(totalItem / 10)}
				offset={offset}
				setOffset={setOffset}
			/>
		</>
	);
};

export default UserSchedule;
