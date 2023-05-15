import React from 'react'
import {Link} from "react-router-dom"
import register_page from "../../assets/register_page.jpg"

const Register = () => {
  return (
    <div className="overflow-hidden register h-screen w-screen bg-[#051622] flex justify-center">
        <div className="shadow-[7px_7px_0px_0px_rgba(138,83,224)] rounded-lg bg-[#e5e5e5] flex h-fit w-fit mt-[10%]">
            <div className=" pl-8 rounded-lg bg-[#A0AECD] h-[400px] w-[350px]">
                <h1 className="mt-[6%] mb-9 text-3xl font-bold text-white">Register</h1>
                <input type="email" className="rounded-md px-5 w-[290px] py-2 mb-4 shadow-lg outline-none text-gray-500 " name="email" id="" shadow-lg  placeholder="Email" />
                <input type="text" className="rounded-md px-5 w-[290px] py-2 mb-4 shadow-lg outline-none text-gray-500 " name="name" id="" shadow-lg  placeholder="Name" />
                <input type="text" className="rounded-md px-5 w-[290px] py-2 mb-4 shadow-lg outline-none text-gray-500 " name="username" id="" shadow-lg  placeholder="Username" />
                <input type="password" className="rounded-md px-5 w-[290px] py-2 shadow-lg outline-none text-gray-500 " name="password" id="" placeholder="Password" />

                <Link to="/login">
                <span className="flex text-[10px] mt-3 ml-1 cursor-pointer text-purple-800 hover:text-purple-600"><a href="https://www.google.com">Already have an account! <u> Login Here</u> </a></span>
                </Link>

                <button type="submit" className="animate-bounce w-40 h-8 font-semibold bg-[#051622] mt-5 outline-none shadow-[5px_5px_0px_0px_rgba(138,83,224)] hover:shadow-none duration-300 cursor-pointer text-white rounded-md">Register</button>
            </div>
            
            <div className="rounded-lg h-[400px] w-[380px]">
                <img src={register_page} alt="login_page" className="register_image h-[395px] mt-1 w-[380px] rounded-lg"/>
            </div>
        </div>
    </div>
  )
}

export default Register
