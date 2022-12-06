const DropClass = (classID, reload, setReload) => {
	let token = localStorage.getItem('token');

	fetch(`http://127.0.0.1:8000/classes/drop`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ id: classID.toString() }),
	}).then((response) => {
		console.log('Drop class called');
		if (response.status === 200) {
			console.log('Drop class success');
		} else if (response.status === 401) {
			console.log('User is not logged in');
		}
		setReload(!reload);
	});
};

export default DropClass;
