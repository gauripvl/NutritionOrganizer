import {Link, useLocation } from "react-router-dom";
import { useState} from "react";
import Sidebar from "./Sidebar.jsx";
import  {faHome, faList, faCartShopping, faCalendarDays} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation()
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome,
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Plan",
            path: "/planner",
            icon: faCalendarDays
        },
        {
            name: "Shop",
            path:"/shop",
            icon: faCartShopping
        }
    ]
    function closeSidebar(){
        (setShowSidebar(false))
    }
    return (
        <>
        <div className="navbar container">
            <a href="#" className="logo">Meal Pla<span>nn</span>er</a>
            <div className="nav-links">
                {links.map(link => (
                    <Link to={link.path} className={location.pathname === link.path ? "nav-link nav-link-ltr nav-link-active": "nav-link nav-link-ltr"} href="#" key={link.name}>{link.name}</Link>
                ))}

            </div>
            <div onClick={() => setShowSidebar(!showSidebar  )} className={showSidebar ? "sidebar-btn active": "sidebar-btn "}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>

            </div>
        </div>
            {showSidebar &&  <Sidebar close={closeSidebar} links={links}/>}

        </>
    )
}