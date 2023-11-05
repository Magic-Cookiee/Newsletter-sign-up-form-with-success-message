const inputEmail = document.querySelector('input');
const formButton = document.querySelector('.form-send');
const customerEmail = document.querySelector('.customer-email');
const formInputId = document.querySelector("#formInputId");
const spanAfterElement = document.querySelector("#spanNeededForAfterElement");
const successMessage = document.querySelector(".success-message");
const mainContainer = document.querySelector('.container-form');
const successInput = document.querySelector('.success-input');

let inputValue = ''

function validateForm(){
  if(inputEmail.value.indexOf("@") == -1 || inputEmail.value.length < 5 || inputEmail.value.indexOf('.') == -1) {
    formInputId.classList.add('form-input-error');
    spanAfterElement.classList.add('form-span-on-error');
  } else {
    formInputId.classList.remove('form-input-error');
    spanAfterElement.classList.remove('form-span-on-error');
    inputValue = inputEmail.value;
    customerEmail.innerHTML = inputValue;
    successMessage.classList.remove('hidden');
    mainContainer.classList.add('hidden');
  }
}

formButton.addEventListener("click", function(event){
    event.preventDefault()
    validateForm();
  });

  successInput.addEventListener("click", function(){location.reload()})