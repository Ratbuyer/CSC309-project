
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import MainPage from './components/mainPage';
import MainNavigation from './components/Navigation/MainNavigation'

function App() {
  let routes = ( <Routes>
        <Route path="/" element={<MainPage />} exact></Route>
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
