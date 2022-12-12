
import { Route, Routers, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { fetchTrans } from './utils/axiosHelper';



function App() {
  const [ TransformStream, setTrans] = useState([]);

  const getTrans = async () => {
    const data = await fetchTrans();
    console.log(data)
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
   
    </Routes>
    <ToastContainer/>
    </div>
  );
}
 
export default App;
