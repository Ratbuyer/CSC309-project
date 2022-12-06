const DropEvent = (eventID, reload, setReload) => {
	let token = localStorage.getItem('token');

	fetch(`http://127.0.0.1:8000/classes/event/drop`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ id: eventID.toString() }),
	}).then((response) => {
		console.log('Drop event called');
		if (response.status === 200) {
			console.log('Drop event success');
		} else if (response.status === 401) {
			console.log('User is not logged in');
		}
		setReload(!reload);
	});
};

export default DropEvent;
