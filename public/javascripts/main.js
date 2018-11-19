// Query Selectors
const smileys = [...document.querySelectorAll('.smiley')]
const shareFeelings = document.querySelector('#enter-mood-picker')
const feelingsTextArea = document.querySelector('#text-area-feelings')
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


// Typewriter functionality
const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement
  this.words = words
  this.txt = ''
  this.wordIndex = 0
  this.wait = parseInt(wait, 10)
  this.type()
  this.isDeleting = false
}

// Type method
TypeWriter.prototype.type = function() {
  // Current index of word
  const current = this.wordIndex % this.words.length
  // Get full text of current word
  const fullTxt = this.words[current]
  // Get the cursor
  let cursor = window.getComputedStyle(
    document.getElementById('main-header'), ':after')
  

  // Check if deleting
  if(this.isDeleting) {
    // Delete a character
    this.txt = fullTxt.substring(0, this.txt.length - 1)
    // Hide the cursor when deleting
    cursor = ''
  } else {
    // Add a character
    this.txt = fullTxt.substring(0, this.txt.length + 1)
    // Hide the cursor when typing
    cursor = ''
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`
  

  // Initial Type speed
  let typeSpeed = 300

  if(this.isDeleting) {
    typeSpeed /= 2
  }

  // Check if word is complete
  if(!this.isDeleting && this.txt === fullTxt) {
    // Make a pause at the end of each word
    typeSpeed = this.wait
    // Show the cursor when not typing

    // Set delete to true
    this.isDeleting = true
  } else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false
    // Move on to the next word
    this.wordIndex++
    // Pause before new word starts typing
    typeSpeed = 500
    
  }
  setTimeout(() => this.type(), typeSpeed)
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init)

//Init app
function init() {
  const txtElement = document.querySelector('.main-header')
  const words = JSON.parse(txtElement.getAttribute('data-words'))
  const wait = txtElement.getAttribute('data-wait')
  // Init Typewriter
  new TypeWriter(txtElement, words, wait)
}