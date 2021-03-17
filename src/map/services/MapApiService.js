import axios from "axios";
import {API_URL} from "../../environment/Config";

export const GetMapLocations = () => {
    return axios
        .get(`${API_URL}api/place/`);
}

export const GetMapCategories = () => {
    return axios
        .get(`${API_URL}api/place/type`);
}
