import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Current from "./pages/Current.jsx";
import NewGuide from "./pages/NewGuide.jsx";
import Home from "./pages/Home.jsx";
import Results from "./pages/Results.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path = "/" element ={<Current />} />
                <Route path = "/newGuide" element ={<NewGuide />} />
                <Route path = "/home" element ={<Home />} />
                <Route path = "/results" element ={<Results  />} />
                <Route path = "/error" element ={<ErrorPage  />} />
            </Routes>
        </Router>

    );

}
export default App
