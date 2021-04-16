import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from "react-router-dom";
import BuddyFinderHeader from "./common/BuddyFinderHeader";
import {GetAd} from "./services/BuddyFinderService";
import {AdModel} from "./models/AdModel";

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
                    <button className="element-button button-wide button-first" onClick={() => history.goBack()}>Back
                    </button>
                    <BuddyFinderHeader title={`Hi. I'm ${userAd?.name}`}/>
                    {JSON.stringify(userAd)}
                </div>
            </section>
        </>
    )
}

export default BuddyFinderAdDetails;