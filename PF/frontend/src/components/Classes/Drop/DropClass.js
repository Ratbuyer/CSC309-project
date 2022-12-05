import * as React from 'react';

const DropClass = (classID) => {
	let token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcyNzcxMzkwLCJpYXQiOjE2NzAxNzkzOTAsImp0aSI6IjJjZGE2ZDFjNzQwYzRjZWM5NDc2MmI2Mzk3NjQzM2FmIiwidXNlcl9pZCI6NH0.Y_J5C39t7sQIC8CYr_DWudKlH0zdnpgHHFLCjjYI2rY';

	fetch(`http://127.0.0.1:8000/classes/drop`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ id: classID.toString() }),
	})
		.then((response) => console.log('drop class success'))
		.catch((error) => console.log('something wrong'));
};

export default DropClass;
