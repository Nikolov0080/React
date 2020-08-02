import decoder from 'jwt-decode'

const cookieValue = document.cookie.replace('x-auth-token=', '')

const result = {
        cookie: cookieValue,
        decoded: decoder(cookieValue)
}



export default result