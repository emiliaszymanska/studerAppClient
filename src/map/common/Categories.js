import React, {useState, useEffect} from 'react';
import {GetMapCategories} from "../services/MapApiService"
import {CategoryModel} from "../model/CategoryModel";

function Categories(props) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // console.log("useEffect")
        GetMapCategories().then(res => {
            const categoriesModel = res?.data?.map(item => new CategoryModel(item))
            setCategories(categoriesModel)
        });
    }, []);

    function handleCheckboxChange(e) {
        const categoriesCopy = [...categories];
        categoriesCopy.filter(category => category.type === e.target.id)
            .map(category => category.isChecked = e.target.checked)
        setCategories(categoriesCopy);
        props.onCategoriesSelect(prepareCategoriesDTO(categoriesCopy));
    }

    function prepareCategoriesDTO(categories) {
        return categories.filter(category => category.isChecked)
            .map(category => category.type);
    }

    return (
        <>
            <div className="categories-container">
                <div className="checkbox-wrapper layout-grid">
                    {categories.map(category => (
                        <div key={category?.type}>
                            <input type="checkbox" id={category?.type} value={category?.type}
                                   onClick={handleCheckboxChange}/>
                            <label htmlFor={category?.type}>{category?.name} {category?.isChecked}</label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Categories;