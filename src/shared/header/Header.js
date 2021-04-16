import React from 'react';
import MainMenu from "./MainMenu";

function Header() {
    return (
        <>
          <header className="content-header" role="banner">
            <div className="layout-container">
              <div className="content-header--layout layout-flex">
                <a href="/" className="content-header--logo">
                  <img src="/icons/logo.svg" alt="Website name"/>
                </a>
                <MainMenu />
              </div>
            </div>
          </header>
        </>
    );
}

export default Header;