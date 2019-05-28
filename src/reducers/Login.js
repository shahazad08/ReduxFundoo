import {INPUT_EMAIL,INPUT_PASSWORD, LOGIN_SUCCESS} from '../constants/actionTypes';
export default (state={
    email:"",
    password:"",
    success:[]
    },action)=>{
        switch(action.type){
            case INPUT_EMAIL:
            return{
                ...state,
                email:action.payload
            }

            case INPUT_PASSWORD:
            return{
                ...state,
                password:action.payload
            }
            case LOGIN_SUCCESS:
            return{
                ...state,
                success:action.payload
            }
            default:
            return state

        }
    }