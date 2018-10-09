const submitNewUser = document.querySelector('#submit-register')
const userEmail = document.querySelector('#user-email')
const userPassword = document.querySelector('#user-password')
const userPassword2 = document.querySelector('#user-password2')
const registerResponseText = document.querySelector('.responseText')


// Function for passing user info to the register route.
function postData(){
  let userRegisterData = {
    email: userEmail.value,
    password: userPassword.value,
    password2: userPassword2.value,
  }
  return fetch('/register', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(userRegisterData),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      
    },
    redirect: 'follow',
  }).then(res => res.json())
  .then(function(response){ 
    if(response.message === 'User saved okey'){
      registerResponseText.textContent = (JSON.stringify(response.message))
    } else if(response[0].msg){
      registerResponseText.textContent = (JSON.stringify(response[0].msg))
    }
  })
  .catch(error => console.error('This is the response from the server. Error:', error))
}

submitNewUser.addEventListener('click', () => postData())