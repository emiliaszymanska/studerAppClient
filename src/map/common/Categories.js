import React, {useState, useEffect} from 'react';
import {GetMapCategories} from "../services/MapApiService"
import {CategoryModel} from "../model/CategoryModel";

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        GetMapCategories().then(res => {
            const categoriesModel = res?.data?.map(item => new CategoryModel(item))
            setCategories(categoriesModel)
        });
    });

    return (
        <>
            <div className="categories-container">
                <div className="checkbox-wrapper layout-grid">
                    {categories.map(category => (
                        <div key={category?.type}>
                            <input type="checkbox" id={category?.type} value={category?.type}/>
                            <label htmlFor={category?.type}>{category?.name} {category?.isChecked}</label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Categories;