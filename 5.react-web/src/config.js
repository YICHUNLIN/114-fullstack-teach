
import CryptoJS from 'crypto-js'
export const OS_NAME ="xxx"
export const OS_CLIENTID = "xxx";
export const OS_CLIENTSECRET = "xxx";
export const AUTH_URL = "http://localhost";
export const CLIENT_SECRET = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(`${OS_CLIENTID}:${OS_CLIENTSECRET}`));

const getScaleURL = () => {
    const key = "SCALE_URL";
    let url = localStorage.getItem(key);
    if (!url){
        url = ""
        localStorage.setItem(key, "http://localhost")
    }
    console.log(url)
    return url;
}


export const SCALE_URL = getScaleURL();