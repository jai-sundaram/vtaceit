import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
           <header className = "text-black py-6
           bg-vtorange drop-shadow-md">
            <ul className = "flex flex-row gap-10 font-semibold text-base">
                <li className = "float-left ml-10 text-5xl text-white hover:scale-130 hover:text-vtpurple">VTAceIt</li>
                <Link to="/"><li className = "float-left ml-165 mt-3 text-2xl text-white hover:underline">Home</li></Link>
                <Link to="/search"><li className = "text-2xl mt-3 text-white hover:underline">Search</li></Link>
                <Link to="/allGuides"><li className = "text-2xl mt-3 text-white hover:underline">All Guides</li></Link>
                <Link to="/newGuide"><li className = "text-2xl mt-3 text-white hover:underline">Add Guide</li></Link>
            </ul>
           </header>
        </div>
    )
}
export default Navbar
