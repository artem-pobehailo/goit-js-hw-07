

const inputName = document.querySelector('#name-input')
const spanName = document.querySelector('#name-output')



inputName.addEventListener('input', () => {
    const newNames = inputName.value.trim(); 
  
    if (newNames === '') {
      spanName.textContent = 'Anonymous';
    } else {
      spanName.textContent = newNames;
    }
  });
