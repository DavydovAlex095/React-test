
export const loadKey = () => {
    try {
        const _apiKey = localStorage.getItem('_apiKey');
        if (_apiKey === null) {
            return undefined;
        }
        return JSON.parse(_apiKey);
    } catch (err) {
        return undefined;
    }
};

export const loadUserName = () => {
    try {
        const userName = localStorage.getItem('userName');
        if (userName === null) {
            return undefined;
        }
        return JSON.parse(userName);
    } catch (err) {
        return undefined;
    }
};
export const loadUserPass = () => {
    try {
        const userPass = localStorage.getItem('userPass');
        if (userPass === null) {
            return undefined;
        }
        return JSON.parse(userPass);
    } catch (err) {
        return undefined;
    }
};

export const setUserData = ( userName, userPass, _apiKey ) => {

    try {
        userName = JSON.stringify(userName);
        userPass = JSON.stringify(userPass);
        _apiKey = JSON.stringify(_apiKey);
    } catch(error) {
        console.log('Error in ' + setUserData.name + ' : ' + error);
        userName  = '';
        userPass = '';
        _apiKey = '';
    }

    localStorage.setItem('userName', userName);
    localStorage.setItem('userPassword', userPass);
    localStorage.setItem('_apiKey', _apiKey);
};