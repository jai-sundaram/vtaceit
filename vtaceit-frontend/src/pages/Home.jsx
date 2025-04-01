import React from 'react'
import Navbar from "../components/Navbar.jsx";

const Home = () => {
    return (
        <div>

        <Navbar />
            <article>
                <img src="src/assets/vtblack.png" className = "h-60 w-160 mt-17 mr-20 float-right" alt="Logo" />
                <h1 className = "text-white text-8xl  ml-20 mt-10 w-120 clear-left"> Welcome To VTAceIt!</h1>
                <p className = "w-100 ml-30 mt-6  text-3xl text-white clear-left">Search for guidance, provide guidance to future students, and explore courses!</p>
            </article>
        </div>
    )
}
export default Home
