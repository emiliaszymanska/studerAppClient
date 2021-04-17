import React from "react";
import BuddyFinderFilterElement from "./BuddyFinderFilterElement";

function BuddyFinderFilter() {

    const selectAge = [{value: '19-21', label: '19 - 21'}, {value: '22-24', label: '22 - 24'}, {
        value: '25-28',
        label: '25 - 28'
    }];

    const selectGender = [{value: 'female', label: 'Female'}, {value: 'male', label: 'Male'}, {
        value: 'other',
        label: 'Other'
    }];

    const selectLanguage = [{value: 'english', label: 'English'}, {value: 'french', label: 'French'}, {
        value: 'spanish',
        label: 'Spanish'
    }];

    return (
        <>
            <form id="search-and-filter-container">
                <div className="search-main-wrapper layout-flex">
                    <div className="layout-flex-inline">
                        <input id="search-bar" type="text" placeholder="Type in..." name="search"/>
                        <button id="search-button" type="submit"><i className="fa fa-search"/></button>
                    </div>
                    <div className="layout-flex-inline">
                        <BuddyFinderFilterElement title={'Age'} options={selectAge}/>
                        <BuddyFinderFilterElement title={'Gender'} options={selectGender}/>
                        <BuddyFinderFilterElement title={'Language'} options={selectLanguage}/>
                    </div>
                </div>
            </form>
        </>
    );
}

export default BuddyFinderFilter;