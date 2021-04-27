import React, {useState} from "react";
import BuddyFinderFilterElement from "./BuddyFinderFilterElement";

function BuddyFinderFilter() {

    const [selectedAge, setSelectedAge] = useState([]);
    const [selectedGender, setSelectedGender] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState([]);

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
            {JSON.stringify(selectedAge)}
            {JSON.stringify(selectedGender)}
            {JSON.stringify(selectedLanguage)}
            <form className="search-and-filter-container layout-flex">
                <div className="search-main-wrapper layout-flex">
                    <div className="layout-flex-inline">
                        <input className="buddy-search-bar" type="text" placeholder="Type in..." name="search"/>
                        <button className="buddy-search-button" type="submit"><i className="fa fa-search"/></button>
                    </div>
                    <div className="select-inner-wrapper layout-grid">
                        <BuddyFinderFilterElement title={'Select age'} options={selectAge} onChange={setSelectedAge}/>
                        <BuddyFinderFilterElement title={'Select gender'} options={selectGender}
                                                  onChange={setSelectedGender}/>
                        <BuddyFinderFilterElement title={'Select language'} options={selectLanguage}
                                                  onChange={setSelectedLanguage}/>
                    </div>
                </div>
            </form>
        </>
    );
}

export default BuddyFinderFilter;