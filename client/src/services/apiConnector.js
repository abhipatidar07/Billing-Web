import axios from "axios"
const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
    //const token = localStorage.getItem("token"); // Retrieve token from localStorage
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers: null,
        params: params ? params : null,
    });
}


