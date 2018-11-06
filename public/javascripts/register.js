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
  })
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    if(json.length > 0){
      json.forEach(res => {
        console.log(res);
        registerResponseText.classList.add('responseTextError')
        registerResponseText.textContent = res.msg
      })
    }else {
      registerResponseText.classList.add('responseTextSuccess')
      registerResponseText.textContent = json.msg
    }
  }) 
  .catch(error => console.error('This is the response from the server. Error:', error))
}

submitNewUser.addEventListener('click', () => postData())