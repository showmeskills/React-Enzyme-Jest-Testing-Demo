import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/"
const request = axios.create({
    baseURL: BASE_URL
})

export const getAllLists = request.get;

const getAllListsTest = async()=>{
    let result;
    try {
         result = await axios.get(`${BASE_URL}posts?_limit=1`);
        
    } catch (e) {
        result = [];
    }
    return result;
}
export const fetchList = async () => {
    try {
        return await axios.get(`${BASE_URL}posts?_limit=1`);
    } catch (e) {
        return [];
    }
}

export { BASE_URL, request,getAllListsTest };