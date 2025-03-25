import {useEffect, useState} from 'react'

import axios from "axios";
import Guide from "../assets/Guide.jsx";

function Current() {
    const [guides, setGuides] = useState([]);

    useEffect(()=>{
        const getData = async() =>{
            try{
                const response = await axios.get("http://localhost:8080/allGuides");
                setGuides(response.data);
                console.log(response.data);
            }
            catch(err){
                console.log(err);
            }
        };
        getData();
    }, [])
    return (
        <ul className = "ml-50 mt-50 flex flex-col gap-20 justify-center max-w-screen">
            {guides.map((guide)=>(
                <Guide guide = {guide} />
            ))}
            <br />
        </ul>
    )
}

export default Current
