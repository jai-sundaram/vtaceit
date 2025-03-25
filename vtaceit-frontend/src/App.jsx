import {useEffect, useState} from 'react'

import './App.css'
import Guide from "./assets/Guide.jsx";
import axios from "axios";

function App() {
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
      <ul className = "flex flex-col gap-20 justify-center max-w-screen">
        {guides.map((guide)=>(
            <Guide guide = {guide} />
            ))}
        <br />
      </ul>
  )
}

export default App
