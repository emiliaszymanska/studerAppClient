import React from 'react';

function Footer() {
    return (
        <>
            <footer className="content-footer" role="contentinfo">
                <div className="layout-container">
                    <div className="content-footer--layout layout-flex">
                        <p className="content-footer--copyright small-text"><small>Made with &ensp;<i
                            className="fas fa-heart text-sm"/> <br/> Studer &copy; 2021</small></p>
                        <a href="https://twitter.com/">
                            <img className="footer-icon" src="/icons/twitter.svg" alt="Twitter"/>
                        </a>
                        <a href="https://www.facebook.com/">
                            <img className="footer-icon" src="/icons/facebook.svg" alt="Facebook"/>
                        </a>
                        <a href="https://www.instagram.com/">
                            <img className="footer-icon" src="/icons/instagram.svg" alt="Instagram"/>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;