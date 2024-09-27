import React, { useState } from 'react';
// import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropleft } from "react-icons/io";

const Navbar = () => {
    const [visible, setVisible] = useState(true);
    console.log (visible)

    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <ul className='hidden gap-5 text-sm text-gray-700 sm:flex' >

                <NavLink to="/" className='flex flex-col items-center gap-1' >
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to="/collection" className='flex flex-col items-center gap-1' >
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to="/about" className='flex flex-col items-center gap-1' >
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to="/contact" className='flex flex-col items-center gap-1' >
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>

                <FaSearch />
                <div className='relative group'>
                    <FaRegUser />

                    <div className='absolute right-0 hidden pt-4 group-hover:block dropdown-menu'>
                        <div className='flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>

                        </div>
                    </div>
                </div>

                <Link to='/cart' className='relative'>
                    <FaCartShopping />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[4px]'>10</p>
                </Link>
                <IoMenu />

            </div>
            {/* Sidebar menu for small screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => { setVisible(false); console.log("hi") }} className='flex items-center gap-4 p-3 cursor-pointer bg-red' >
                        <IoMdArrowDropleft />

                        <p>Back</p>
                    </div>
                    <NavLink className='py-2 pl-6 border' to='/'>Home</NavLink>
                    <NavLink className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>

                
                

            </div>
        </div>
    )
}

export default Navbar