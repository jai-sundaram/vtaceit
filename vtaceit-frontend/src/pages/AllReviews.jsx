import {useEffect, useState} from 'react'

import axios from "axios";
import Guide from "../assets/Guide.jsx";
import Navbar from "../assets/Navbar.jsx";

function AllReviews() {
    const [guides, setGuides] = useState([]);

    useEffect(()=>{
        const getData = async() =>{
            try{
                const response = await fetch("http://localhost:8080/allGuides");
                const data = await response.json();
                setGuides(data);
                console.log(response.data);
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
        <ul className = "ml-50 mt-50 flex flex-col gap-20 justify-center max-w-screen">
            {guides.map((guide)=>(
                <Guide guide = {guide} />
            ))}
            <br />
        </ul>
        </div>
    )
}

export default AllReviews
