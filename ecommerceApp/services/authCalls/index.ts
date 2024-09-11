import { makeApiCall } from "../apiCall";

const loginCall = async (credentials) => {
    return makeApiCall('post', '/auth/login', credentials);
};

const verifyOtpCall = async (data) => {
    return makeApiCall('post', '/api/auth/verifyOtp', data);
};

const getLoginUserDataCall = async (data) => {
    return makeApiCall('post', '/api/auth/signup', data);
};


const finalStepPostCall = async (formData) => {
    return makeApiCall('post', '/api/auth/signup', formData, true, {});
};



const AuthService = {
    loginCall, verifyOtpCall, getLoginUserDataCall, finalStepPostCall
}

export default AuthService;