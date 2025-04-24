import React from "react";
import "./NavBar.css";

function NavBar() {
    const navList = [
        {
            name: "About Us",
        },
        {
            name: "Solutions",
        },
        {
            name: "Pricing",
        },
        {
            name: "Contact Us",
        },
    ];
    return (
        <div className="navBar">
            <div className="navContainer">
                <div className="branding">
                    <img
                        src="/src/assets/logo.png"
                        alt="Logo"
                        className="logo"
                    />
                </div>
                <div className="navList">
                    {navList.map((item) => (
                        <div className="listItem">{item.name}</div>
                    ))}
                </div>
                <div className="menuIcon">
                    <img src="/src/assets/menu.png" className="menuImg" />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
