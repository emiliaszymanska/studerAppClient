import axios from "axios";
import {API_URL} from "../../environment/Config";

export const GetUserProfile = (id) => {
    return axios
        .get(`${API_URL}api/user/${id}`);
}
