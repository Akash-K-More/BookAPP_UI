import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' Component={HomePage} />
          <Route path='/login' Component={LoginPage}/>
          <Route path='/signup' Component={SignupPage}/>
          <Route path='/dashboard' Component={DashboardPage}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
