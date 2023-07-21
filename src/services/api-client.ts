import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params : {
        key : '0c92309b3b4347f7b054cd14440fd37d',
    }
})