import React, {useState, useEffect} from 'react';
import BuddyFinderHeader from "./common/BuddyFinderHeader";
import BuddyFinderFilter from "./common/BuddyFinderFilter";
import BuddyFinderAd from "./common/BuddyFinderAd";
import {AdModel} from "./models/AdModel";
import {GetAds} from "./services/BuddyFinderService";

function BuddyFinder() {

    const [ads, setAds] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        GetAds(selectedFilters).then(res => {
            const adsModel = res?.data?.map(item => new AdModel(item));
            setAds(adsModel);
        });
    }, [selectedFilters]);

    return (
        <>
            <section className="content-buddy-finder">
                <div className="layout-container">
                    <BuddyFinderHeader title={'Meet new people'} description={'Buddy Finder – find a friend'}/>
                    <BuddyFinderFilter setSelectedFilters={setSelectedFilters}/>
                    {ads.map(item => <BuddyFinderAd userAd={item}/>)}
                </div>
            </section>
        </>
    )
}

export default BuddyFinder;