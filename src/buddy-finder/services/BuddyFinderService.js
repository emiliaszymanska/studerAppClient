import axios from "axios";
import {API_URL} from "../../environment/Config";

export const GetAds = () => {
    return axios
        .get(`${API_URL}api/advertisement`);
}

export const GetAd = (id) => {
    return axios
        .get(`${API_URL}api/advertisement/${id}`);
}
