import React from 'react'
import {Link} from "react-router-dom";
import Navbar from "../assets/Navbar.jsx";

const ErrorPage = () => {
    return (
        <div>
            <Navbar />
            <h1 className = "ml-125 mt-10 text-6xl text-white">No review exists yet.</h1>
            <Link to = "/newGuide" className = "ml-153 mt-10 text-3xl text-white inline-block underline">Create a new review?
            </Link>
        </div>
    )
}
export default ErrorPage
