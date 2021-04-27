import React from "react";
import Select from "react-select";

function BuddyFinderFilterElement({title, options, onChange}) {
    return (
        <>
            <div className="select-inner-wrapper-options">
                <div className="select-title">{title}</div>
                <div>
                    <Select isMulti options={options} onChange={e => onChange(e.map(item => item.value))}/>
                </div>
            </div>
        </>
    );
}

export default BuddyFinderFilterElement;