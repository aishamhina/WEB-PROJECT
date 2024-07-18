import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Dashbaord from './component/Dashbaord';
import Detail from './component/Detail'
import './App.css';

function App() {
  return (
  <>
  
  <BrowserRouter>
    <Routes>
      <Route index element={< Login />} />
      <Route path='/register' element={<Register />} />
      <Route path= '/dashbaord' element={<Dashbaord />} />
      <Route path='/details' element={<Detail />} />
    </Routes>
  </BrowserRouter>
  
  </>
  );
}

export default App;
