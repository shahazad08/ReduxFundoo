
import {call,put,takeEvery,all} from 'redux-saga/effects'
import axios from 'axios';
import { REGISTER_ASYNC, REGISTER_SUCCESS, REGISTER_ERR0R, LOGIN_ASYNC, LOGIN_SUCCESS, LOGIN_ERROR } from '../constants/actionTypes';

const baseUrl = "http://34.213.106.173/api/"

function* registerUser(action)
{
    var data=action.payload
    console.log("in data==>",data);

    try {
        console.log("data in  sag   " + JSON.stringify(data))
        yield put({ type: REGISTER_ASYNC });

       var response= yield call(register=>axios.post(baseUrl + "user/userSignUp", data))
        
            yield put({type:REGISTER_SUCCESS,payload:response.data})
            
            // toast('Registered Successfully'+JSON.stringify(response));

    }
    catch (error) {
      
        console.log("error in saga--- " + error)
        yield put({ type: REGISTER_ERR0R, payload: error })
}


}
export function* fetchRegisterUser(){
    yield takeEvery('REGISTER_USER',registerUser);
}

/***********************Login API******************************************** */


function* loginUser(action){
    var data=action.payload
    console.log("Login data==>",data);
    try{
        console.log("data in  sag   " + JSON.stringify(data))
        yield put({type:LOGIN_ASYNC});

        var response=yield call(login=>axios.post(baseUrl+"user/login", data))
        yield put({type:LOGIN_SUCCESS,payload:response.data})
        console.log("Login token",response.data.userId);
        localStorage.setItem("token",response.data.userId)
        window.location.href = '/home'

    }
    catch(error){
        console.log("error in saga--- " + error)
        console.log("Please Enter the Valid Details")
        yield put ({type:LOGIN_ERROR,payload:error});
    }
}

export function* fetchLoginUser(){
    yield takeEvery('LOGIN_USER',loginUser)
}

export default function* rootSaga() {
    console.log('in root saga')
    yield all([
    fetchRegisterUser(),
    fetchLoginUser()
    ])
    }