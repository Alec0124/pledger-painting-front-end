import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import companyLogo from "./images/company_logo.webp";
import hamburger from "./images/hamburger-menu.webp";
const NavHeader = ({ windowLocation }) => {


    const [hamburgerClass, setHamburgerClass] = useState("hide");


    const isHomeSelected = () => {
        return windowLocation === "home" ? "selected" : "";
    };
    const isAboutSelected = () => {
        return windowLocation === "about" ? "selected" : "";
    };
    const isServicesSelected = () => {
        return windowLocation === "services" ? "selected" : "";
    };
    const isPhotosSelected = () => {
        return windowLocation === "photos" ? "selected" : "";
    };
    const isTestimonialsSelected = () => {
        return windowLocation === "testimonials" ? "selected" : "";
    };

    const onClickHamburger = (e) => {
        //open a menu underneath with the nav bar links
        "hide" === hamburgerClass ? setHamburgerClass("") : setHamburgerClass("hide");
    };

    useEffect(()=>{
        setHamburgerClass("hide");
    },[windowLocation])


    return <div id="nav-header">
        <div id="nav-header-logo">
            <img alt="company-logo" src={companyLogo} />
        </div>
        <div id="hamburger-menu">
            <img src={hamburger} alt="hamburger" className="hamburger" onClick={onClickHamburger} />
            <div id="hamburger-menu-dropdown" className={hamburgerClass}>
                <Link to="./home" className={isHomeSelected()}>
                    Home
                </Link>
                <Link to="./photos" className={isPhotosSelected()}>
                    Photos
                </Link>
                <Link to="./services" className={isServicesSelected()}>
                    Services
                </Link>
                <Link to="./testimonials" className={isTestimonialsSelected()}>
                    Testimonials
                </Link>
                <Link to="./about" className={isAboutSelected()}>
                    About
                </Link>
            </div>
        </div>
        <div id="nav-bar">
            <Link to="./home" className={isHomeSelected()}>
                Home
            </Link>
            <Link to="./photos" className={isPhotosSelected()}>
                Photos
            </Link>
            <Link to="./services" className={isServicesSelected()}>
                Services
            </Link>
            <Link to="./testimonials" className={isTestimonialsSelected()}>
                Testimonials
            </Link>
            <Link to="./about" className={isAboutSelected()}>
                About
            </Link>
        </div>

    </div>
};

export default NavHeader;