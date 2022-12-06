function EnrollEvent(eventID) {
	let token = localStorage.getItem('token');

	fetch(`http://127.0.0.1:8000/classes/event/enroll`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ id: eventID.toString() }),
	}).then((response) => {
		console.log('Enroll event called');
		if (response.status === 200) {
			console.log('Enroll event success');
		} else if (response.status === 401) {
			console.log('User is not logged in');
		} else if (response.status === 403) {
			console.log('User does not have subscription');
		}
	});
}

export default EnrollEvent;
