import React from 'react';

function UploadButton({onChange}) {
    return (
        <>
            <div>
                <div>
                    <label htmlFor='image-upload'>
                        Upload Image
                    </label>
                    <input type='file' id='image-upload' onChange={onChange}/>
                </div>
            </div>
        </>
    );
}

export default UploadButton;