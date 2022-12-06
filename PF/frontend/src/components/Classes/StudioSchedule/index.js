import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ScheduleTable from '../ScheduleTable';
import Pagination from '@mui/material/Pagination';

const Search = ({ query, setQuery }) => {
	return (
		<>
			<label>
				Search:
				<input
					title="Search"
					type="text"
					value={query.search}
					placeholder="Class name, Coach, Category."
					onChange={(event) => {
						setQuery({ offset: 0, search: event.target.value });
					}}
				/>
			</label>
		</>
	);
};

const SchedulePagination = ({ lastpage, query, setQuery }) => {
	return (
		<Pagination
			count={lastpage}
			defaultPage={1}
			onChange={(event, value) => {
				setQuery({ ...query, offset: (value - 1) * 10 });
				console.log(value);
			}}
		/>
	);
};

const StudioSchedule = () => {
	const { studioID } = useParams();
	const [classes, setClasses] = useState([]);
	const [query, setQuery] = useState({ offset: 0, search: '' });
	const [totalItem, setTotalItem] = useState(1);
	const [reload, setReload] = useState(false);

	useEffect(() => {
		fetch(
			`http://127.0.0.1:8000/studios/${studioID}/classes?search=${query.search}&offset=${query.offset}`
		)
			.then((response) => response.json())
			.then((json) => {
				setClasses(json.results);
				setTotalItem(json.count);
			});
	}, [studioID, query, reload]);

	return (
		<>
			<h1>Class Schedule</h1>
			<Search query={query} setQuery={setQuery} />
			<ScheduleTable
				classes={classes}
				isUser={false}
				isHitory={true}
				reload={reload}
				setReload={setReload}
			/>
			<SchedulePagination
				lastpage={Math.ceil(totalItem / 10)}
				query={query}
				setQuery={setQuery}
			/>
		</>
	);
};

export default StudioSchedule;
