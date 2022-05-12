import {Axios} from "./Axios";

export function doLogin(payload) {
    return Axios.post("login",payload);
}

function doSignUp(payload) {
    return Axios.post("signup", payload);
}

function getDataUser() {
    return Axios.get("user");
}

export const authService = {
    doLogin,
    doSignUp,
    getDataUser
};