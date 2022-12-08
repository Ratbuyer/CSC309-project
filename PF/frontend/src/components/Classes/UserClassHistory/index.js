import React, { useState, useEffect } from 'react';
import ScheduleTable from '../ScheduleTable/ScheduleTable';
import { useNavigate } from 'react-router-dom';
import { UserSchedulePagination } from '../Pagination/Pagination';

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
			<h1 className="schedule-title">My Class History</h1>
			{classes.length === 0 ? (
				<h2 className="no-class-messages">You don't have history</h2>
			) : null}

			<ScheduleTable classes={classes} isUser={true} isHitory={true} />
			<UserSchedulePagination
				lastpage={Math.ceil(totalItem / 10)}
				setOffset={setOffset}
			/>
		</>
	);
};

export default UserClassHistory;
