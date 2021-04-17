import React from "react";
import {DATE_FORMAT} from "../../environment/Config";
import {Link} from "react-router-dom";

function BuddyFinderAd({userAd}) {
    return (
        <>
            <div className="layout-flex">
                <div className="ad-container layout-grid">
                    <div className="person-details">
                        <p>Name:</p><span>{userAd?.name}</span>
                        <p>Gender:</p><span>{userAd?.gender}</span>
                        <p>Age:</p><span>{userAd?.age}</span>
                        <p>City:</p><span>{userAd?.city}</span>
                        <p>University:</p><span>{userAd?.university}</span>
                        <p>Languages:</p><span>{userAd?.languages}</span>
                    </div>
                    <img className="profile-picture" src={userAd?.photo} alt="User"/>
                    <div className="date"><b>Date:</b>&ensp;{userAd?.creationDate?.format(DATE_FORMAT)}</div>
                    <div className="button-user-details">
                        <Link to={`/buddy/${userAd?.userAdId}`}>
                            <button className="element-button button-wide button-first">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BuddyFinderAd;