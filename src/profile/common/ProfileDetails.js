import React from "react";
import ProfileForm from "./ProfileForm";
import Spinner from "../../shared/Spinner";

function ProfileDetails({userProfile, isLoading}) {
    return (
        <>
            <div className="layout-flex">
                <div className="ad-container layout-grid">
                    {isLoading ? <Spinner/> : <ProfileForm userProfile={userProfile}/>}
                </div>
            </div>
        </>
    );
}

export default ProfileDetails;