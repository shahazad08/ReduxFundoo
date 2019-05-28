import { OPEN_MENU, CLOSE_MENU, OPEN_PROFILE, CLOSE_PROFILE, OPEN_NOTE, CLOSE_NOTE } from "../constants/actionTypes";

export default (state={
    open:false,
    openProfile:false,
    openNote:false
    },action)=>{
        switch(action.type){
            case OPEN_MENU:
            return{
                ...state,
                open:true
            }
            case CLOSE_MENU:
            return{
                ...state,
                open:false
            }
            case OPEN_PROFILE:
            return{
                ...state,
                openProfile:true
            }
            case CLOSE_PROFILE:
            return{
                ...state,
                openProfile:false
            }
            case OPEN_NOTE:
            return{
                ...state,
                openNote:true
            }
            default:
            return state
        }
    }

