import decoder from 'jwt-decode'

const cookieValue = document.cookie.replace('x-auth-token=', '');

const decodedCookie = () => {
        if (cookieValue) {
                return decoder(cookieValue)
        } else {
                return null
        }
}

const result = {
        cookie: cookieValue,
        decoded: decodedCookie()
}


export default result