const submitNewUser = document.querySelector('#submit-register')
const userEmail = document.querySelector('#user-email')
const userPassword = document.querySelector('#user-password')
const registerResponseText = document.querySelector('.responseText')


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
    if(response.status === 401){
      return response.json()
    } else {
      return response
    }
  })
  .then(function(json){
    if(json.message){
      console.log(json);
      registerResponseText.classList.add('responseTextError')
      registerResponseText.textContent = json.message
    } else {
        window.location.href = '/'
      }
  })
}
// redirect depending on status from server.

submitNewUser.addEventListener('click', () => postUserData())