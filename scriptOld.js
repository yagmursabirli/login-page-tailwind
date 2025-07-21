document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
  validateField(firstName, 'First Name cannot be empty');
  validateField(lastName, 'Last Name cannot be empty');
  validateField(email);
  validateField(password, 'Password cannot be empty');
}


function validateField(input, message){
    const value = input.value.trim();
    const errorIcon = input.parentElement.querySelector('img');
    removeError(input, errorIcon);

    if(value === ''){
        setError(input, errorIcon, message);
    }
}

function validateEmail(input) {
  const value = input.value.trim();
  const errorIcon = input.parentElement.querySelector('img');
  removeError(input, errorIcon);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value === '') {
    setError(input, errorIcon, 'Email cannot be empty');
  } else if (!emailRegex.test(value)) {
    setError(input, errorIcon, 'Looks like this is not an email');
  }
}

function setError(input, icon, message){
    input.classList.add('border-red-500', 'text-red-500', 'placeholder:text-red-300');
    if(icon){
        icon.classList.remove('hidden');
    }

    let errorText = input.parentElement.querySelector('small');
    if (!errorText) {
        errorText = document.createElement('small');
        errorText.className = 'text-red-400 text-xs italic absolute right-2 -bottom-4';
        input.parentElement.appendChild(errorText);
    }
    errorText.innerText = message;
}

function removeError(input, icon) {
  input.classList.remove('border-red-500', 'text-red-500', 'placeholder:text-red-300');
  if (icon) icon.classList.add('hidden');

  const errorText = input.parentElement.querySelector('small');
  if (errorText) errorText.remove();
}


});