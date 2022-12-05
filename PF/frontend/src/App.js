import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Studios from './components/Studios';
import MainNavigation from './components/Navigation/MainNavigation';
import SignIn from './components/Account/SignIn';


const MainPage = () => {
  return <h2>Main Page</h2>
};


function App() {
  let routes = ( <Routes>
        <Route path="/" element={<MainPage />} exact></Route>
        <Route path="/studios" element={<Studios />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>)

  return (<BrowserRouter>
    <MainNavigation />
     <main>
  
      {routes}

    </main>
  </BrowserRouter>
  )  

}

export default App;
