const smileys = [...document.querySelectorAll('.smiley')]
const shareFeelings = document.querySelector('#enter-mood-picker')
const feelingsTextArea = document.querySelector('#text-area-feelings')
const userMoodContainer = document.querySelector('#user-mood-container')
const moodNoteTextarea = document.querySelector('#mood-note')
const submitFeeligns = document.querySelector('#submit-feelings')
const moodLeadText = document.querySelector('#mood-lead')
const loginButton = document.querySelector('#login-btn')

// Current date generator.
const curDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');

// Function for toggling the modal >>> MOVE MODAL HERE <<<
function enterFeelings(e) {
  e.preventDefault()
  setInterval(() => {
    smileys.forEach(function(item){
      item.classList.remove('hide'), item.classList.add('fadeInLeft')
    });
    feelingsTextArea.classList.remove('hide')
    feelingsTextArea.classList.add('fadeInLeft')
  }, 200)
}

// Function for assigning the users submitted mood to local storage
function setLocalStorage(userMoodEntry, userMoodNote){
  let userMoodObj = {
    'date': curDate,
    'usermood': userMoodEntry,
    'note': userMoodNote
  }
  let userMoodArray = JSON.parse(localStorage.getItem('userentry')) || []
  userMoodArray.push(userMoodObj)
  localStorage.setItem('userentry', JSON.stringify(userMoodArray))
}

// Function for passing user submitted mood data to the DB.
function postData(userMoodEntry, userMoodNote){
  let userData = {
    mood: userMoodEntry,
    note: userMoodNote
  }
  return fetch('/mood/add', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

let pickedMood = 0
let moodNote = ''
let userMood = []

// Get the median mood value from the userMood array.
const userMedianMood = arr => arr.reduce((a,b) => a + b, 0) / userMood.length

shareFeelings.addEventListener('click', enterFeelings);

// Query Selectors for the modals.
const modal = document.querySelector('.modal')
const trigger = document.querySelector('.trigger')
const closeButton = document.querySelector('.close-button')
const successModal = document.querySelector('.success-modal')

// Functions for toggling the modals.
function toggleModal(){
  modal.classList.toggle('show-modal')
}

function toggleSuccessMessage(){
  successModal.classList.toggle('show-modal-success')
}

function windowOnClick(event) {
  if(event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener('click', toggleModal)
closeButton.addEventListener('click', toggleModal)
window.addEventListener('click', windowOnClick)