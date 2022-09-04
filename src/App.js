import React from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/layout/Navbar';
import Logins from './auth/Logins';
import Register from './auth/Register';
import Guest from './components/layout/Guest';
import Cart from './components/Cart';
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Navbar/>}>
             <Route path='/' element={<Home/>}/>
          </Route>
          <Route element={<Guest/>}>
             <Route path='/register' element={<Register/>}/>
             <Route path='/login' element={<Logins/>}/>
          </Route>
          <Route>
             <Route path='/cart' element={<Cart/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  
  )
};

export default App;
