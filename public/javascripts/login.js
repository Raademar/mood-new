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
  }).then(res => res.json())
  .then(function(response){
    window.location.replace("/index.html")
  })
}
// redirect depending on status from server.

submitNewUser.addEventListener('click', () => postUserData())