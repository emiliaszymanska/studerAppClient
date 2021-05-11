import React, {useState} from "react";

function ProfileForm({userProfile}) {

    const [formValue, setFormValue] = useState(userProfile);

    const handleInputChange = (e, fieldName) => {
        const newFormValue = {...formValue};
        newFormValue[fieldName] = e.target.value;
        setFormValue(newFormValue);
    }

    return (
        <>
            <form>
                <div className="user-profile-wrapper layout-grid">
                    <label htmlFor="name">Name:</label>
                    <input id="name" value={formValue.name}/>
                    <label htmlFor="gender">Gender:</label>
                    <input id="gender" value={formValue.gender}/>
                    <label htmlFor="age">Age:</label>
                    <input id="age" value={formValue.age}/>
                    <label htmlFor="email">E-mail:</label>
                    <input id="email" value={formValue.email}/>
                    <label htmlFor="university">University:</label>
                    <input id="university" value={formValue.university}
                           onChange={(e) => handleInputChange(e, 'university')}/>
                    <label htmlFor="city">City:</label>
                    <input id="city" value={formValue.city} onChange={(e) => handleInputChange(e, 'city')}/>
                    <label htmlFor="languages">Languages:</label>
                    <input id="languages" value={formValue.languages}/>
                </div>
                <button>Save changes</button>
            </form>
        </>
    );
}

export default ProfileForm;