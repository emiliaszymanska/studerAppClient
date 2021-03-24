import axios from "axios";
import {API_URL} from "../../environment/Config";

export const GetMapLocations = (placeType = [], centerLatitude, centerLongitude, radius) => {
    return axios
        .get(`${API_URL}api/place/type/radius/${placeType.join(',')}?centerLatitude=${centerLatitude}&centerLongitude=${centerLongitude}&radius=${radius}`);
}

export const GetMapCategories = () => {
    return axios
        .get(`${API_URL}api/place/type`);
}
