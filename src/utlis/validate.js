export const validateLoginCred = (email, password)=> {
    if(!email || !password) {
        return [false, 'Input cannot be emty'];
    } else if(!validateEmail(email) || !validatePassword(password) )
    return [false, 'Invalid Username or password']
    else return [true, '']
}

export const validateSignUpCred = (email, username, password, ) => {
    if(!email || !password) {
        return [false, 'Input cannot be emty'];
    } else if(!validateEmail(email) || !validatePassword(password || !validateUserName(username)) )
    return [false, 'Invalid Username or password']
    else return [true, '']
}

export const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailPattern.test(email)
}

const validatePassword = (password) => { 

    return password.length > 4 && password.length < 19;
}

const validateUserName = (userName)=>{
    return userName.length > 2 && userName.length < 16
}