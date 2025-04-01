import React from 'react'
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const ErrorPage = () => {
    return (
        <div>
            <Navbar />
            <h1 className = "ml-115 mt-10 text-6xl text-white">No review exists yet.</h1>
            <Link to = "/newGuide" className = "ml-148 mt-10 text-3xl text-white inline-block underline">Create a new review?
            </Link>
        </div>
    )
}
export default ErrorPage
