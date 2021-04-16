import React from "react";
import Select from "react-select";

function BuddyFinderFilterElement({title, options}) {
    return (
        <>
            <div>
                <div>{title}</div>
                <div>
                    <Select options={options}/>
                </div>
            </div>
        </>
    );
}

export default BuddyFinderFilterElement;