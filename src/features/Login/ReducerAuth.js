import {LOGIN_USER_START,LOGIN_USER_FINISH,LOGIN_USER_FAIL} from '../../utils/types';

const INITIAL_STATE={}

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case LOGIN_USER_START:
        return{
            ...state,
            isloading: true,

        }
        case LOGIN_USER_FINISH:
        return{
            ...state,
            isloading: false,
            result:action.payload

        }
        case LOGIN_USER_FAIL:
        return{
            ...state,
            isloading: false,
            error:true

        }
        default:
        return state;
    }
}