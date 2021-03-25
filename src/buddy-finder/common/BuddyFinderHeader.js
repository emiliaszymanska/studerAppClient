import React from "react";

function BuddyFinderHeader() {
    return (
        <>
            <div className="buddy-finder-header layout-flex">
                <p className="paragraph-description">Buddy Finder – find a friend</p>
                <h2>Meet new people</h2>
            </div>
            <div className="layout-flex">
                <form>
                    <input id="search-bar" type="text" placeholder="Type in..." name="search"/>
                    <button id="search-button" type="submit"><i className="fa fa-search"/></button>
                </form>
            </div>
        </>
    );
}

export default BuddyFinderHeader;