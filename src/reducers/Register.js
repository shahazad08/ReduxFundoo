import {INPUT_EMAIL,INPUT_PASSWORD, INPUT_FIRST_NAME, INPUT_LAST_NAME, INPUT_CONFIRMPASSWORD, REGISTER_SUCCESS, REGISTER_ASYNC, REGISTER_ERR0R} from '../constants/actionTypes';

export default (state={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
    success:[],
    loading:false,
    error:[]
    },action)=>{
        switch(action.type){
            case INPUT_FIRST_NAME:
            return{
                ...state,
                firstName:action.payload
            }
            case INPUT_LAST_NAME:
            return{
                ...state,
                lastName:action.payload
            }
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
            case INPUT_CONFIRMPASSWORD:
            return{
                ...state,
                confirmPassword:action.payload
            }
            case REGISTER_SUCCESS:
            return{
                ...state,
                success:action.payload
            }
            case REGISTER_ASYNC:
            return{
                ...state,
                loading:true
            }
            case REGISTER_ERR0R:
            return{
                ...state,
               error:action.payload
            }
            
            default:
            return state

        }
    }