import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';
// import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Services from './Services.js';
import Photos from './Photos.js';
import NavHeader from "./NavHeader.js";
import SocialHeader from "./SocialHeader.js";
import InfoFooter from "./InfoFooter.js";
import Testimonials from "./Testimonials.js";
import "./style.css";


const root = ReactDOM.createRoot(document.getElementById('app'));
const App = () => {

    const [windowLocation, setWindowLocation] = useState("");


    return <>
    <SocialHeader />
        <InfoFooter />
        <Router>
            <NavHeader windowLocation={windowLocation} />
            <Routes>
                <Route path="/home" element={<Home setWindowLocation={setWindowLocation} />} />
                <Route path="/services" element={<Services setWindowLocation={setWindowLocation} />} />
                <Route path="/about" element={<About setWindowLocation={setWindowLocation} />} />
                <Route path="/photos" element={<Photos setWindowLocation={setWindowLocation} />} />
                <Route path="/testimonials" element={<Testimonials setWindowLocation={setWindowLocation} />} />
                <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
        </Router>
    </>
}
root.render(
    <App />
);