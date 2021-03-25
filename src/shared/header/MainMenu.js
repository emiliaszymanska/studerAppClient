import React from 'react';
import {Link} from "react-router-dom";

function MainMenu() {
    return (
        <>
            <input type="checkbox" id="content-header--hamburger-menu"/>
            <label htmlFor="content-header--hamburger-menu" className="content-header--menu-collapsed"/>

            <nav className="content-header--navigation layout-flex" role="navigation">
                {/*<a href="#" className="content-header--navigation-link">Log in</a>*/}
                {/*<a href="#" className="content-header--navigation-link">Sign up</a>*/}
                <Link to="/buddy">
                    <span className="content-header--navigation-link">Buddy Finder</span>
                </Link>
                <Link to="/map">
                    <span className="content-header--navigation-link">Map</span>
                </Link>
                <Link to="/">
                    <span className="content-header--navigation-link">Home</span>
                </Link>
            </nav>
        </>
    );
}

export default MainMenu;