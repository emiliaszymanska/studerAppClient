import React from "react";

function BuddyFinderHeader({title, description}) {
    return (
        <>
            <div className="buddy-finder-header layout-flex">
                <p className="paragraph-description">{description || ''}</p>
                <h2>{title || ''}</h2>
            </div>
        </>
    );
}

export default BuddyFinderHeader;