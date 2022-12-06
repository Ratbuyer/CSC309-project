import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { KeywordsToString } from '.';
import EnrollClass from '../Enroll/EnrollClass';
import DropClass from '../Drop/DropClass';

function ScheduleDialogAction({ session, handleClose, reload, setReload }) {
	return (
		<>
			<DialogContent>
				<hr></hr>
				<DialogContentText>
					Would you like to enroll or drop all future sessions of this class?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					variant="contained"
					onClick={() => {
						EnrollClass(session.classInfo.id);
						handleClose();
					}}
					autoFocus
				>
					Enroll All
				</Button>
				<Button
					variant="contained"
					color="error"
					onClick={() => {
						DropClass(session.classInfo.id, reload, setReload);
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

function StudioDialogAction({ session, handleClose }) {
	return (
		<>
			<DialogContent>
				<hr></hr>
				<DialogContentText>
					Would you like to enroll all future sessions of this class?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					variant="contained"
					onClick={() => {
						EnrollClass(session.classInfo.id);
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
}) {
	if (isUser) {
		return isHitory ? null : (
			<ScheduleDialogAction
				session={session}
				handleClose={handleClose}
				reload={reload}
				setReload={setReload}
			/>
		);
	} else {
		return <StudioDialogAction session={session} handleClose={handleClose} />;
	}
}

function SessionDialog({
	session,
	showDialog,
	setShowDialog,
	isUser,
	isHitory,
	reload,
	setReload,
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
			>
				<DialogTitle id="alert-dialog-title">Class Information</DialogTitle>
				<DialogContent>
					<div>
						<div>
							{session.start_time.slice(0, -3) +
								' - ' +
								session.end_time.slice(0, -3)}
						</div>
						<div>{session.classInfo.name}</div>
						<div>{session.classInfo.description}</div>
						<div>
							Coach:
							<span>{session.classInfo.coach}</span>
						</div>
						<div>
							Category:
							<span>{KeywordsToString(session.classInfo.keywords)}</span>
						</div>
						<div>
							Availablity:
							<span>
								{session.classInfo.capacity - session.enrolled_num} spots left
							</span>
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
