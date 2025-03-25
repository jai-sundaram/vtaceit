import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Current from "./pages/Current.jsx";
import NewGuide from "./pages/NewGuide.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path = "/" element ={<Current />} />
                <Route path = "/newGuide" element ={<NewGuide />} />
                <Route path = "/home" element ={<Home />} />
            </Routes>
        </Router>

    );

}
export default App
