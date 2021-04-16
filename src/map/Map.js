import React, {useState} from 'react';
import MapHeader from "./common/MapHeader";
import Categories from "./common/Categories";
import MapContent from "./common/MapContent";

function Map() {

    const [categoriesDTO, setCategoriesDTO] = useState([]);

    return (
        <>
            <section className="content-map">
                <div className="layout-container">
                    <MapHeader />
                    <Categories onCategoriesSelect={(e) => setCategoriesDTO(e)} />
                    <MapContent categories={categoriesDTO}/>
                </div>
            </section>
        </>
    );
}

export default Map;