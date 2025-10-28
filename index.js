document.getElementById('contactForm').addEventListener("submit",function(e){
    e.preventDefault();

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const successMsg = document.getElementById('successMsg');
const errors = document.querySelectorAll('.error');

errors.forEach(error => error.textContent = '');
successMsg.textContent = "";

let isValid = true;

if(name.value.trim() === ""){
    setError(name,"Your name should not empty");
    isValid = false;
}

if(email.value.trim() === ""){
    setError(email,"Your email should not empty");
    isValid = false;
}  else if(!isValidEmail(email.value)){
    setError(email,"Enter a valid email");
    isValid = false;
}

if(message.value.trim() === ""){
    setError(message,"your message should not empty");
    isValid = false;
}

if(isValid){
    successMsg.textContent = "Form submitted Successfully";
    name.value = "";
    email.value = "";
    message.value = "";
}

});

function setError(element,message){
    const parent = element.parentElement;
    const error = parent.querySelector(".error");
    error.textContent = message;
}

function isValidEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}