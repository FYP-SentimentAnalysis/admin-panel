import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminPanel from './Components/AdminPanel';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import PrivateRoutes from './Helpers/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element= {<SignUp />}/>
          <Route path='/login' element= {<Login />}/>
          <Route path='/*' element= {<PrivateRoutes element={<AdminPanel />}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
