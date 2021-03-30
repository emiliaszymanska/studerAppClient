import React from "react";
import {DATE_FORMAT} from "../../environment/Config";

function BuddyFinderAd({userAd}) {
    return (
        <>
            <div className="layout-flex">
                <div className="ad-container layout-grid">
                    <div className="person-details">
                        <p>Name:</p><span>{userAd?.name}</span>
                        <p>Sex:</p><span>{userAd?.sex}</span>
                        <p>Age:</p><span>{userAd?.age?.format(`${DATE_FORMAT}`)}</span>
                        <p>City:</p><span>{userAd?.city}</span>
                        <p>University:</p><span>{userAd?.university}</span>
                        <p>Languages:</p><span>{userAd?.languages}</span>
                    </div>
                    <img className="profile-picture" src={userAd?.photo} alt="User"/>
                    <div className="date"><b>Date:</b>&ensp;</div>
                    <button className="button-user-details element-button button-wide button-first">Details</button>
                </div>
            </div>
        </>
    );
}

export default BuddyFinderAd;