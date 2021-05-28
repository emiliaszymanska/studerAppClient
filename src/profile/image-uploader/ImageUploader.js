import React, {useState} from 'react';
import ImagePreview from "./ImagePreview";
import UploadButton from "./UploadButton";
import axios from "axios";
import {API_URL} from "../../environment/Config";
import {Slide, toast, ToastContainer} from "react-toastify";

function ImageUploader() {

    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState(null);

    const onChange = (e) => {
        setUploading(true);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);

        axios({
            method: 'POST',
            url: `${API_URL}api/user/photo/upload`,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })
            .then(() => toast(`Image loaded successfully`))
            .then((res) => {
                // res.data
                const mockedImageName = "example-image";
                setImage(mockedImageName);
                setUploading(false);
            })
            .catch(() => {
                console.log("Error");
                setUploading(false);
            })
    }

    const removeImage = () => {
        // TODO: endpoint do usuwania zdjęcia
        setImage(null);
    }

    const content = () => {
        switch (true) {
            case uploading:
                return 'Loading...'
            case image?.length > 0: // !!image
                return <ImagePreview image={image} removeImage={removeImage}/>
            default:
                return <UploadButton onChange={onChange}/>
        }
    }

    return (
        <>
            {content()}
            <ToastContainer
                position="top-right"
                transition={Slide}
                autoClose={3000}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
            />
        </>
    );
}

export default ImageUploader;