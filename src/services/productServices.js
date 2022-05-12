import {Axios} from './Axios';
function getProduct(payload){
    return Axios.get("home");
}
export const productServices = {
    getProduct
};