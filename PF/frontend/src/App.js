import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainNavigation from './components/Navigation/MainNavigation';
import Login from './components/Account/Login';
import Register from './components/Account/Register';
import Album from './components/Studios/Album';
import Details from './components/Studios/Details';
import Profile from './components/Account/Profile';
import Logout from './components/Account/Logout';
import Classes from './components/Classes/StudioSchedule';
import UserSchedule from './components/Classes/UserClassSchedule';
import UserClassHistory from './components/Classes/UserClassHistory';
import Add from './components/Subscription/Add'
import Edit from './components/Subscription/Edit'
import History from './components/Payment/History'


const MainPage = () => {
	return <h2 style={{ textAlign: 'centre' }}>Main Page</h2>;
};


function App() {
	let routes = (
		<Routes>
			<Route path="/" element={<MainPage />} exact="true"></Route>
			<Route path="/studios" element={<Album />}></Route>
			<Route path="/studios/:studioId/details" element={<Details />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/logout" element={<Logout />}></Route>
			<Route path="/register" element={<Register />}></Route>
			<Route path="/profile" element={<Profile />}></Route>
			<Route path="/classes/:studioID" element={<Classes />} exact></Route>
			<Route path="/class-schedule" element={<UserSchedule />} exact></Route>
			<Route path="/class-history" element={<UserClassHistory />} exact></Route>
            <Route path="/subscription/add" element={<Add />}></Route>
            <Route path="/subscription/edit" element={<Edit />}></Route>
            <Route path="/payment/history" element={<History />}></Route>
		</Routes>
	);


    return (<BrowserRouter>
        <MainNavigation />
        <main>
            {routes}
        </main>
    </BrowserRouter>
    )

}

export default App;
