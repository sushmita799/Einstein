import axios from 'axios';

function getBaseUrl() {
    if(process.env.NODE_ENV === 'development') {
        return 'http://localhost:3001';
    }
    return 'https://exp-mysql.herokuapp.com/';
}
export default axios.create({
    baseURL: getBaseUrl()
})