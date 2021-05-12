import React from 'react';
import {API_URL} from "../../environment/Config";

function ImagePreview({image, removeImage}) {
    return (
        <>
            <div>
                <div onClick={() => removeImage()}/>
                <img src={`${API_URL}/api/user/photo/${image}`} alt=''/>
            </div>

        </>
    );
}

export default ImagePreview;