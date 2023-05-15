import React from 'react'
import "./Navbar.css"
import PinOutlinedIcon from '@mui/icons-material/PinOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import {Link} from "react-router-dom"
import LoggedIn from "../../App"

const Navbar = () => {

   const logout = () =>{
    LoggedIn = !LoggedIn
   }

  return (
    <nav className="shadow-lg inset-x-0">
      <div className="left mt-3 ml-2">
        <Link to="/">
          <PinOutlinedIcon className="mx-2" />
        </Link>
        <Link to="/home">
          <HomeOutlinedIcon className="mx-2" />
        </Link>
      </div>
      <div className="middle">
        <input type="search" name="search" className="bg-gray-200 text-sm font-semibold text-gray-400 outline-none rounded-md w-[500px] m-2 p-2 h-8" placeholder="Search" />
      </div>
      <div className="right mt-[10px] mr-2 float-right ">
        <Brightness4OutlinedIcon className="mx-2 cursor:pointer" />
        <NotificationsNoneOutlinedIcon className="mx-2" />
        <Link to="./profile/:id">
          <AccountCircleOutlinedIcon className="mx-2" />
        </Link>
        <Link to="/login" onClick={logout}>
          <LogoutOutlinedIcon className="mx-2" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar