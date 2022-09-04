import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../Footer'
import GuestNavbar from '../GuestNavbar'
const Guest = () => {
  return (
    <div>
        <GuestNavbar/>
        <div className='mb-24'>
            <Outlet/>
        </div>
        <Footer/> 
    </div>
  )
}

export default Guest