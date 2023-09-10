import './App.css';

import { Route, Routes } from 'react-router-dom';
import Index from './pages';
import Home from './pages/home';

function App() {
  

  return (
    <>
    <Routes>

      <Route path='/home' element={ <Index/>} />
      <Route path='/' element={<Home/>} />
    </Routes>
    </>
  );
}

export default App;
