import React from 'react'
import { Link, NavLink } from 'react-router'

const Header = () => {
    return (
        <div className="bg-green-600/100">
            <div className=' w-11/12 mx-auto  flex items-center justify-between py-4 text-white font-semibold  ' >
                {/* logo */}
                <div className="">
                    <h1>Logo</h1>
                </div>
                {/* navigation */}
                <div className="">
                    <ul className='flex items-center gap-x-5 ' >
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "text-red-500" : "text-black"
                        } to="/">Home</NavLink></li>
                        <li><NavLink  to="/about">About</NavLink></li>
                        <li><NavLink className={({isActive})=>isActive ? " text-red-600 bg-white px-4 py-1 rounded-lg shadow-md " : "text-white"} to="/skill">Skill</NavLink></li>
                        <li><NavLink className={({isActive})=>isActive ? " text-red-600 bg-white px-4 py-1 rounded-lg shadow-md " : "text-white"} to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                {/* search bar */}
                <div className='' >

                </div>
            </div>
        </div>
    )
}

export default Header
