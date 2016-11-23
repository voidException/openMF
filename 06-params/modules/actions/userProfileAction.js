/**
 * Created by mfhj-dz-001-424 on 16/11/23.
 */
import * as types from './actionTypes';
import {Urllogin} from '../utils/url';

export function  receiveUserProfile(userAccount,json){

    return{
        type:types.Login_userProfile,
        userAccount,
        posts:json.data,
        receivedAt:Date.now()
    }
}


export  function fetchUserProfile(userAccount){

    return dispatch=>{
        return fetch(Urllogin,{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userEmail: userAccount.userEmail,
                userPassword: userAccount.userPassword
            })
        })
        .then(response=>response.json())
        .then(json=>dispatch(receiveUserProfile(userAccount,json)))
        .catch(function(e){
           console.log(e);
        });
    }
}

export function fetchUserProfileIfNeeded(userAccount){
    return (dispatch,getState)=>{
        return dispatch(fetchUserProfile(userAccount))
    }
}


//从最下面的函数，一直往上调用上面的函数，这里看到只有一个type，
//也就是说对应的reducer只有一个，但这里写了三个函数。

