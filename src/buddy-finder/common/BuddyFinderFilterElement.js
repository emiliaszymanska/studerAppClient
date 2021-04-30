import React from "react";
import Select from "react-select";

function BuddyFinderFilterElement({title, options, onChange}) {
    const changeValue = (e) => {
        const selectedValueLabels = e.map(item => item.label);
        const newState = [...options];
        newState.forEach(item => item.isSelected = selectedValueLabels.includes(item.label));
        console.log(newState)
        onChange(newState);
    }

    return (
        <>
            <div className="select-inner-wrapper-options">
                <div className="select-title">{title}</div>
                <div>
                    <Select isMulti options={options} onChange={e => changeValue(e)}/>
                </div>
            </div>
        </>
    );
}

export default BuddyFinderFilterElement;