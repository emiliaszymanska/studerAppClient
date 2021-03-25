import React from "react";

function BuddyFinderFilter() {
    return (
        <>
            <div className="layout-flex">
                <form>
                    <input id="search-bar" type="text" placeholder="Type in..." name="search"/>
                    <button id="search-button" type="submit"><i className="fa fa-search"/></button>
                </form>
            </div>
        </>
    );
}

export default BuddyFinderFilter;