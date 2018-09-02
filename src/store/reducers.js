import {combineReducers} from 'redux';
import UserAuthReducer from '../features/Login/ReducerAuth';

export default combineReducers({
    userAuthReducer : UserAuthReducer
})