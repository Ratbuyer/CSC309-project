import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { KeywordsToString } from './ScheduleTable';
import EnrollClass from '../Enroll/EnrollClass';
import DropClass from '../Drop/DropClass';
import { useNavigate } from 'react-router-dom';

import './ScheduleTable.css';

function ScheduleDialogAction({
	session,
	handleClose,
	reload,
	setReload,
	setShowSnackbar,
}) {
	const navigate = useNavigate();

	return (
		<>
			<DialogContent>
				<DialogContentText>
					Would you like to enroll or drop all future sessions of this class?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					variant="contained"
					onClick={() => {
						EnrollClass(
							session.classInfo.id,
							reload,
							setReload,
							navigate,
							setShowSnackbar
						);
						handleClose();
					}}
					autoFocus
				>
					Enroll All
				</Button>
				<Button
					variant="outlined"
					color="error"
					onClick={() => {
						DropClass(
							session.classInfo.id,
							reload,
							setReload,
							navigate,
							setShowSnackbar
						);
						handleClose();
					}}
					autoFocus
				>
					Drop All
				</Button>
			</DialogActions>
		</>
	);
}

function StudioDialogAction({
	session,
	handleClose,
	reload,
	setReload,
	setShowSnackbar,
}) {
	const navigate = useNavigate();

	return (
		<>
			<DialogContent>
				<DialogContentText>
					Would you like to enroll all future sessions of this class?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					variant="contained"
					onClick={() => {
						EnrollClass(
							session.classInfo.id,
							reload,
							setReload,
							navigate,
							setShowSnackbar
						);
						handleClose();
					}}
					autoFocus
				>
					Enroll All
				</Button>
			</DialogActions>
		</>
	);
}

function SessionDialogAction({
	session,
	isUser,
	isHitory,
	handleClose,
	reload,
	setReload,
	setShowSnackbar,
}) {
	if (isUser) {
		return isHitory ? null : (
			<ScheduleDialogAction
				session={session}
				handleClose={handleClose}
				reload={reload}
				setReload={setReload}
				setShowSnackbar={setShowSnackbar}
			/>
		);
	} else {
		return (
			<StudioDialogAction
				session={session}
				handleClose={handleClose}
				reload={reload}
				setReload={setReload}
				setShowSnackbar={setShowSnackbar}
			/>
		);
	}
}

const styles = {
	dialog: {
		// styles for the Dialog
	},
	dialogTitle: {
		'font-weight': 'bold',
		'font-size': '1.5rem',
	},
	dialogContent: {
		// styles for the Dialog content
	},
};

function SessionDialog({
	session,
	showDialog,
	setShowDialog,
	isUser,
	isHitory,
	reload,
	setReload,
	setShowSnackbar,
}) {
	const handleClose = () => {
		setShowDialog(false);
	};

	return (
		<>
			<Dialog
				open={showDialog}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				sx={{
					'& .MuiDialog-paper': {
						width: '100%',
						maxWidth: '500px',
						margin: '20px',
					},
				}}
				classes={{
					title: styles.dialogTitle,
				}}
			>
				<DialogTitle id="alert-dialog-title">Class Information</DialogTitle>
				<DialogContent dividers>
					<div className="schedule-dialog-info">
						<div className="schedule-dialog-time">
							{session.start_time.slice(0, -3) +
								' - ' +
								session.end_time.slice(0, -3)}
						</div>
						<div className="schedule-dialog-name">{session.classInfo.name}</div>
						<div className="schedule-dialog-description">
							{session.classInfo.description}
						</div>
						<div className="schedule-dialog-coach">
							<strong>Coach:</strong> {session.classInfo.coach}
						</div>
						<div className="schedule-dialog-category">
							<strong>Category:</strong>{' '}
							{KeywordsToString(session.classInfo.keywords)}
						</div>
						<div className="schedule-dialog-spots">
							{session.classInfo.capacity - session.enrolled_num} spots
							available!
						</div>
					</div>
				</DialogContent>
				<SessionDialogAction
					session={session}
					handleClose={handleClose}
					isUser={isUser}
					isHitory={isHitory}
					reload={reload}
					setReload={setReload}
					setShowSnackbar={setShowSnackbar}
				/>
				<DialogActions>
					<Button
						onClick={() => {
							handleClose();
						}}
						color="error"
					>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default SessionDialog;
