import axios from "axios";
import {API_URL} from "../../environment/Config";

export const GetUsersAds = () => {
    return axios
        .get(`${API_URL}api/advertisement`);
}
