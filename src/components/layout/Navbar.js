import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
const Navbar = () => {
  return (
    <div>
        <Header />
        <div>
            <Outlet />
        </div>
        <Footer/>
        </div>
  )
}

export default Navbar