const auth = async (url, body, onSuccess, onFailure) => {
  try {
    const promise = await fetch(url, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const response = await promise.json();

    if (response) {
      const authToken = promise.headers.get('Auth')
      document.cookie = `x-auth-token=${authToken}`
    }

    if (response.username ) {

      onSuccess({
        username: response.username,
        id: response._id
      })
    } else {
      onSuccess()
    }
  } catch (e) {
    onFailure(e)
  }
}


export default auth;