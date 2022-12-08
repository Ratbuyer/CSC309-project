import Pagination from '@mui/material/Pagination';

import './Pagination.css';

const SchedulePagination = ({ lastpage, query, setQuery }) => {
	return (
		<Pagination
			className="schedule-pagination"
			size="large"
			count={lastpage}
			defaultPage={1}
			onChange={(event, value) => {
				setQuery({ ...query, offset: (value - 1) * 10 });
			}}
		/>
	);
};

export default SchedulePagination;
