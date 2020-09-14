import Axios from "../api/serverApi.js";


export const findAll = async einsteinData => {
    return await Axios.post('users', einsteinData);
}