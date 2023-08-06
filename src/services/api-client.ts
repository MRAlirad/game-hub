import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count : number;
    results : T[]
}

const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params : {
        key : '0c92309b3b4347f7b054cd14440fd37d',
    }
});

class APIClient<T> {
    endpoint : string;

    constructor(endpoint: string)
    {
        this.endpoint = endpoint;
    }

    getAll = async (config : AxiosRequestConfig)=>
    {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }
}

export default APIClient;