import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from "react-router-dom";
import BuddyFinderHeader from "./BuddyFinderHeader";
import {GetAd} from "../services/BuddyFinderService";
import {AdModel} from "../models/AdModel";
import {DATE_FORMAT} from "../../environment/Config";

function BuddyFinderAdDetails() {

    let {id} = useParams();
    let history = useHistory();
    const [userAd, setUserAd] = useState([]);

    useEffect(() => {
        GetAd(id).then(res => {
            const userAdModel = new AdModel(res?.data);
            setUserAd(userAdModel);
        });
    }, [id]);

    return (
        <>
            <section className="content-buddy-finder">
                <div className="layout-container">
                    {/*<BuddyFinderHeader title={`Hi. I'm ${userAd?.name}`}/>*/}
                    <div className="ad-details-main-container layout-flex">
                        <div className="ad-details-wrapper layout-grid">
                            <div className="ad-details-left">
                                <div className="ad-details-line"/>
                                <div className="name-user">About {userAd?.name}, {userAd?.age}</div>
                                {/*<p>{userAd?.title}</p>*/}
                                <article className="ad-description">{userAd?.description}</article>
                                <p>{userAd?.creationDate?.format(DATE_FORMAT)}</p>
                            </div>
                            <div className="ad-details-right layout-flex">
                                <img className="profile-picture" src={userAd?.photo} alt="User"/>
                                <span>{userAd?.name}</span>
                                <p>University:<span>{userAd?.university}Jagiellonian University</span></p>
                                <div className="ad-details-right-inner layout-grid">
                                    <p>City:</p><span>{userAd?.city}</span>
                                    <p>University:</p><span>{userAd?.university}Jagiellonian University</span>
                                    <p>Languages:</p><span>{userAd?.languages}</span>
                                </div>
                            </div>
                        </div>
                        <button className="element-button button-wide button-first"
                                onClick={() => history.goBack()}>Back
                        </button>
                    </div>
                    {/*{JSON.stringify(userAd)}*/}
                </div>
            </section>
        </>
    )
}

export default BuddyFinderAdDetails;