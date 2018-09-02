import { LOGIN_USER_START, LOGIN_USER_FINISH, LOGIN_USER_FAIL } from '../../utils/types';
import firebase from '../../../firebase';

export const _requstUserAuth = () => {
    return{
        type:LOGIN_USER_START,
    }
}

export const _requstUserAuthSuccess = (response) => {
    return{
        type: LOGIN_USER_FINISH,
        payload: response
    }
}

export const _requstUserAuthFail = () => {
    return{
        type:LOGIN_USER_FAIL,
    }
}

export const loginUser = (email, password) => {

    return (dispatch) => {
        dispatch(_requstUserAuth());
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                console.log(response.user._user);
                dispatch(_requstUserAuthSuccess(response.user._user))
            })
            .catch(err => {
                console.log("signuper", err);
                dispatch(_requstUserAuthFail(err))
                /*switch(err){
                    case 'Error: The email address is already in use by another account.':
                    return 'The email address is already in use by another account.'
                    default:
                    return 'Our Server seems to be busy.Please try again later.';
                }*/
            });
    }
}

export const registerUser =(email, password) => {

    return (dispatch) => {
        dispatch(_requstUserAuth());
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                /**
                 * FIXME:get refresh id here
                 */
                dispatch(_requstUserAuthSuccess(JSON.stringify(response)))
            })
            .catch(err => {
                console.log("signuper", err);
                dispatch(_requstUserAuthFail(err))
                /*switch(err){
                    case 'Error: The email address is already in use by another account.':
                    return 'The email address is already in use by another account.'
                    default:
                    return 'Our Server seems to be busy.Please try again later.';
                }*/
            });
    }
}