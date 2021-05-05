import axios from "axios";
import {API_URL} from "../../environment/Config";

export const GetAds = (selectedFilters) => {
    return axios
        .post(`${API_URL}api/advertisement/filter`, selectedFilters);
}

export const GetAd = (id) => {
    return axios
        .get(`${API_URL}api/advertisement/${id}`);
}

export const GetFilterCategories = () => {
    return axios
        .get(`${API_URL}api/advertisement/criteria`);
}

export const GetSuggestion = (suggestion) => {
    return axios
        .get(`${API_URL}api/advertisement/search/${suggestion}`);
}
