import {Axios} from "./Axios";

export function doLogin(payload) {
    return Axios.post("login",payload);
}

function doSignUp(payload) {
    return Axios.post("register", payload);
}

function getDataUser() {
    return Axios.get("user");
}

function doForgotPassword(payload) {
    return Axios.post("forgot-password", payload);
}

export const authService = {
    doLogin,
    doSignUp,
    getDataUser,
    doForgotPassword
};