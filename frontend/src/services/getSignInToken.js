async function getSignInToken(email, password) {
  const mail = email.value
  const word = password.value
    console.log("Email :", mail)
    console.log("Password :", word)

    const requestOptions = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({
        "email": mail,
        "password": word
      })
    
    }
    return fetch('http://localhost:3001/api/v1/user/login', requestOptions)
}

export default getSignInToken