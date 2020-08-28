// так можно получить данные формы
const emailInput = document.querySelector('#email');
const emailErrorText = document.querySelector('.error-text_email');
const passwordInput = document.querySelector('#password');
const passwordErrorText = document.querySelector('.error-text_password');
const formElem = document.querySelector('.login-form');

// 1. Read form data after submit
// 2 Validate email
// 3 Validate password

const handleSubmit = e => {
  e.preventDefault();
  // e.stopPropagation()  //not the same

  const formData = JSON.stringify(Object.fromEntries(new FormData(formElem)));
  alert(formData)
}

formElem.addEventListener('submit', handleSubmit);

const validateEmail = email => 
  email.includes('@') ? null : 'Incorrect email';

const handleEmail = e => {
  const email = e.target.value;
  const error = email ? validateEmail(email) : 'Email required';
  emailErrorText.textContent = error;
}

// Draft solution
// const handleEmail = e => {
//   const error = e.target.value ? null : 'Email required';
//   if(!error) {
//     error = event.target.value.includes('@') ? null :
//     'Incorrect email'
//   }
  
//   emailErrorText.textContent = error;
// }

emailInput.addEventListener('input', handleEmail)

const handlePassword = e => {
  const error = e.target.value ? null : 'Password required';
  passwordErrorText.textContent = error;
}

passwordInput.addEventListener('input', handlePassword)
