const submitNewUser = document.querySelector('#submit-register')
const userEmail = document.querySelector('#user-email')
const userPassword = document.querySelector('#user-password')


// Function for passing user info to the login route.
function postUserData(){
  let userLoginData = {
    email: userEmail.value,
    password: userPassword.value,
  }
  return fetch('/login', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(userLoginData),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
  }).then(function(response){
    return response.json()
    })
    .then(function(res){
      console.log(res)  
    })
}
// redirect depending on status from server.

submitNewUser.addEventListener('click', () => postUserData())