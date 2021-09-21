import axios from "axios";

export const BASE_URL = "https://jsonplaceholder.typicode.com/"
export const request = axios.create({
    baseURL: BASE_URL
})

export const getAllLists = request.get;

export const fetchList = async () => {
    try {
        return await axios.get(`${BASE_URL}posts?_limit=1`);
    } catch (e) {
        return [];
    }
}