
const form = document.querySelector(`.login-form`);
form.addEventListener(`submit`, newSudmit);
function newSudmit(event) {
  event.preventDefault();
  const elements = event.target.elements 

  if (elements.email.value === '' || elements.password.value === '') {
    alert('All form fields must be filled in');
  return; 
  } 
  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };

  console.log(info);

  form.reset();
}




