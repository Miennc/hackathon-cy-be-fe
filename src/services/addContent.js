import {Axios} from './Axios';
function postContent(payload){
    return Axios.post("home",payload);
}
export const postContentServices = {
    postContent
};