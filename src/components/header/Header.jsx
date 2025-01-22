import React from 'react'
import { Link } from 'react-router'

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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skill">Skill</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
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
