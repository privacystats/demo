import React from 'react'
import {Link} from "react-router-dom"
import "./login.css"
import login_page from "../../assets/login_page.jpg"

const Login = () => {
  return (
    <div className="overflow-hidden login h-screen w-screen bg-[#051622] flex justify-center">
        <div className="shadow-[7px_7px_0px_0px_rgba(138,83,224)] rounded-lg bg-white flex h-fit w-fit mt-[10%]">
            <div className=" pl-8 rounded-lg bg-[#A0AECD] h-[400px] w-[350px]">
                <h1 className="mt-[30%] mb-10 text-3xl font-bold text-white">Login</h1>
                <input type="text" className="rounded-md px-5 w-[290px] py-2 mb-4 shadow-lg outline-none text-gray-500 " name="username" id="" shadow-lg  placeholder="Username" />
                <input type="password" className="rounded-md px-5 w-[290px] py-2 shadow-lg outline-none text-gray-500 " name="password" id="" placeholder="Password" />

                <Link to="/register">
                <span className="flex text-[10px] mt-3 ml-1 cursor-pointer text-purple-800 hover:text-purple-600"><a href="https://www.google.com">Don't have an account? <u>Create one</u> </a></span>
                </Link>

                <button type="submit" className="animate-bounce w-40 h-8 font-semibold bg-[#051622] mt-5 outline-none shadow-[5px_5px_0px_0px_rgba(138,83,224)] hover:shadow-none duration-300 cursor-pointer text-white rounded-md">Login</button>
            </div>
            
            <div className="rounded-lg h-[400px] w-[380px]">
                <img src={login_page} alt="login_page" className="login_image rounded-lg"/>
            </div>
        </div>
    </div>
  )
}

export default Login