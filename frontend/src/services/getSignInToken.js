async function getSignInToken(email, password) {
    console.log("Email :", email.value)
    console.log("Password :", password.value)
    const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
        "email": "toto",
        "password": "tata"
      })
    }
    console.log(fetch('http://localhost:3001/api/v1/user/login', requestOptions)) 
    return fetch('http://localhost:3001/api/v1/user/login', requestOptions)
}

export default getSignInToken