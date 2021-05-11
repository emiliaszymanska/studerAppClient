import React, {useEffect, useState} from 'react';
import ImageUploader from "./image-uploader/ImageUploader";
import {GetUserProfile} from "./services/ProfileService";
import {UserProfileModel} from "./models/UserProfileModel";
import ProfileDetails from "./common/ProfileDetails";

function Profile() {

    const [userProfile, setUserProfile] = useState(new UserProfileModel());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        GetUserProfile("b388fa0a-76a6-11eb-9439-0242ac130002").then(res => {
            setUserProfile(new UserProfileModel(res?.data));
            setIsLoading(false);
            // setTimeout(() => setIsLoading(false), 350);
        });
    }, []);

    return (
        <>
            <section className="content-map">
                <div className="layout-container">
                    <ImageUploader/>
                    <ProfileDetails userProfile={userProfile} isLoading={isLoading}/>
                </div>
            </section>
        </>
    );
}

export default Profile;