const _validate = (name, value, formCopy) => {
    let valid = true;
    switch (name) {
        case 'email':
            valid = valid && this._validatEmail(value);
            break;
        case 'password':
            valid = valid && this._validatePassword(value);
            break;
        case 'comfirmPassword':

            valid = valid && this._validateComfirmPassword(value, formCopy['password'].value);
            break;
        default:
            valid = true;
    }
    return valid;
}

_validatEmail = (email) => {
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(String(email).toLowerCase());
}

_validatePassword = (password) => {
    if (password.length >= 6) {
        return true
    }
    return false
}

_validateComfirmPassword = (comfirmPassword, pass) => {
    console.log('comf', comfirmPassword + ' ' + pass)
    if (comfirmPassword === pass) {
        return true
    }
    return false
}

export default _validate