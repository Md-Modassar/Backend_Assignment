//import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
