import React, {useEffect, useState} from 'react';
import BuddyFinderHeader from "./common/BuddyFinderHeader";
import BuddyFinderFilter from "./common/BuddyFinderFilter";
import BuddyFinderAd from "./common/BuddyFinderAd";
import {UserAdModel} from "./models/UserAdModel";
import {GetUsersAds} from "./services/BuddyFinderService";

function BuddyFinder() {

    const [usersAds, setUsersAds] = useState([]);

    useEffect(() => {
        GetUsersAds().then(res => {
            const usersAdsModel = res?.data?.map(item => new UserAdModel(item))
            setUsersAds(usersAdsModel)
        });
    }, []);

    return (
        <>
            <section className="content-buddy-finder">
                <div className="layout-container">
                    <BuddyFinderHeader/>
                    <BuddyFinderFilter/>
                    {usersAds.map(item => <BuddyFinderAd userAd={item}/>)}
                </div>
            </section>
        </>
    )
}

export default BuddyFinder;