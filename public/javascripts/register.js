const submitNewUser = document.querySelector('#submit-register')
const userEmail = document.querySelector('#user-email')
const userPassword = document.querySelector('#user-password')
const userPassword2 = document.querySelector('#user-password2')


// Function for passing user info to the register route.
function postData(){
  let userRegisterData = {
    email: userEmail.value,
    password: userPassword.value,
    password2: userPassword2.value,
  }
  return fetch('/register', {
    method: 'POST',
    body: JSON.stringify(userRegisterData),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

submitNewUser.addEventListener('click', () => postData())