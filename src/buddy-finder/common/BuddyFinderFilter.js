import React, {useState, useEffect} from "react";
import BuddyFinderFilterElement from "./BuddyFinderFilterElement";
import {GetFilterCategories, GetSuggestion} from "../services/BuddyFinderService";
import {FilterCategoryModel, FilterCategoryModelToDTO} from "../models/FilterCategoryModel";
import {from, Subject} from "rxjs";
import {filter, debounceTime, distinctUntilChanged, switchMap, map, tap} from "rxjs/operators";

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
                distinctUntilChanged(),
                switchMap(enteredSuggestion => from(GetSuggestion(enteredSuggestion))),
                map(apiResult => apiResult.data.flatMap(item => item)),
                tap(value => console.log(value))
            )
            .subscribe()
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
            <div className="search-and-filter-container layout-flex">
                <div className="search-main-wrapper layout-flex">
                    <div className="layout-flex-inline">
                        <input className="buddy-search-bar" onChange={(e) => inputStream$.next(e.target.value)}
                               type="text" placeholder="Type in..." name="search"/>
                        <button onClick={onFilterClick} className="buddy-search-button" type="submit"><i className="fa fa-search"/></button>
                    </div>
                    <div className="select-inner-wrapper layout-grid">
                        <BuddyFinderFilterElement title={'Select age'} options={selectAge} onChange={setSelectAge}/>
                        <BuddyFinderFilterElement title={'Select gender'} options={selectGender}
                                                  onChange={setSelectGender}/>
                        <BuddyFinderFilterElement title={'Select language'} options={selectLanguage}
                                                  onChange={setSelectLanguage}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BuddyFinderFilter;