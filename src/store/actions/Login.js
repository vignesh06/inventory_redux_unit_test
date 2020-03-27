import * as actionTypes from './actionTypes';
import HTTPService from '../../Services/HTTPService';
import { UrlConstant, localstorageConstants } from '../../Constants/Constants';
import thunk from 'redux-thunk';
export const login =  (userName,password) => {
    return async (dispatch)=>{
        let url = UrlConstant.Ip + UrlConstant.login
    let data={"userName":userName,"password":password}
    let responsedata=await HTTPService(url, 'get')
    dispatch( {
        type: actionTypes.LOGIN,
        value:responsedata.token
    })
    return responsedata
   }
};