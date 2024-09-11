import axios from "axios";
// import { BASE_URL } from "./BaseUrl";
import { getData } from "../utils/globalFunctions";

const prepareHeader = (isFormData = false, accessToken, customHeaders = {}) => {
    const requestHeader = {
        headers: {
            Accept: 'application/json',
            Authorization: accessToken,
            ...customHeaders
        }
    };
    if (isFormData) {
        requestHeader.headers['Content-Type'] = 'multipart/form-data'
    } else {
        requestHeader.headers['Content-Type'] = 'application/json'
    }
    return requestHeader
}

export const makeApiCall = async (method, endpoint, data,
    isFormData = false, customHeaders = {}) => {

    const apiUrl = BASE_URL + endpoint;
    try {
        const key = 'token';
        const token = await getData(key);
        const headers = prepareHeader(isFormData, `Bearer ${token}`, customHeaders);

        const response = await axios({
            method: method,
            url: apiUrl,
            headers: headers.headers,
            data: data,
        });
        return response.data;
    } catch (error) {
        console.log(error.response, "------makeApiCall")
        return error.response.data;
    }
};
