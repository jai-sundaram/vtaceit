import {useEffect, useState} from 'react'

import axios from "axios";
import Guide from "../components/Guide.jsx";
import Navbar from "../components/Navbar.jsx";

function AllReviews() {
    const [guides, setGuides] = useState([]);

    useEffect(()=>{
        const getData = async() =>{
            try{
                const response = await fetch("http://18.206.162.228:8080/allGuides");
                const data = await response.json();
                setGuides(data);
                console.log(data);
            }
            catch(err){
                console.log(err);
            }
        };
        getData();
    }, [])
    return (
        <div>
        <Navbar/>
            <h1 className = "ml-115 mt-35 text-white text-6xl">Showing All Guides:</h1>
        <ul className = "ml-50 mt-30 flex flex-col gap-20 justify-center max-w-screen">
            {guides.map((guide)=>(
                <Guide guide = {guide} />
            ))}
            <br />
        </ul>
        </div>
    )
}

export default AllReviews
