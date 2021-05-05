import React, {useState, useEffect} from "react";
import BuddyFinderFilterElement from "./BuddyFinderFilterElement";
import {GetFilterCategories, GetSuggestion} from "../services/BuddyFinderService";
import {FilterCategoryModel, FilterCategoryModelToDTO} from "../models/FilterCategoryModel";
import {Subject} from "rxjs";
import {filter, debounceTime, distinctUntilChanged} from "rxjs/operators";

const inputStream$ = new Subject();

function BuddyFinderFilter({setSelectedFilters}) {

    const [selectAge, setSelectAge] = useState([]);
    const [selectGender, setSelectGender] = useState([]);
    const [selectLanguage, setSelectLanguage] = useState([]);

    useEffect(() => {
        GetFilterCategories().then(res => {
            const filterCategoriesModel = res?.data?.map(item => new FilterCategoryModel(item));
            filterCategoriesModel.forEach(item => {
                switch (item?.type) {
                    case 'AGE':
                        assignSelectValue(item, selectAge, setSelectAge);
                        break;
                    case 'GENDER':
                        assignSelectValue(item, selectGender, setSelectGender);
                        break;
                    case 'LANGUAGE':
                        assignSelectValue(item, selectLanguage, setSelectLanguage);
                        break;
                    default:
                        break;
                }
            })
        });

        const inputStreamSubscriber = inputStream$
            .pipe(
                filter(s => s.length > 0),
                debounceTime(600),
                distinctUntilChanged()
            )
            .subscribe(value => GetSuggestion(value)
                .then(res => console.log(res)));
        return () => {
            inputStreamSubscriber.unsubscribe();
        }
    }, []);

    const assignSelectValue = (item, selector, setSelector) => {
        const newValue = selector;
        newValue.push(item);
        setSelector([...newValue]);
    }

    const onFilterClick = () => setSelectedFilters(FilterCategoryModelToDTO([...selectAge, ...selectGender, ...selectLanguage]));

    return (
        <>
            <form className="search-and-filter-container layout-flex">
                <div className="search-main-wrapper layout-flex">
                    <div className="layout-flex-inline">
                        <input className="buddy-search-bar" onChange={(e) => inputStream$.next(e.target.value)}
                               type="text" placeholder="Type in..." name="search"/>
                        <button className="buddy-search-button" type="submit"><i className="fa fa-search"/></button>
                    </div>
                    <div className="select-inner-wrapper layout-grid">
                        <BuddyFinderFilterElement title={'Select age'} options={selectAge} onChange={setSelectAge}/>
                        <BuddyFinderFilterElement title={'Select gender'} options={selectGender}
                                                  onChange={setSelectGender}/>
                        <BuddyFinderFilterElement title={'Select language'} options={selectLanguage}
                                                  onChange={setSelectLanguage}/>
                    </div>
                </div>
            </form>
            <button onClick={onFilterClick}>Filter</button>
        </>
    );
}

export default BuddyFinderFilter;