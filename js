const registerForm = document.querySelector("register");
registerForm.addEventListener("submit", handleRegister);
function handleRegister(event){
    event.preventDefault();
    const addressEmail = document.querySelector('[name="addressEmail"]');
    if(addressEmail.value.length < 3){
        const errorLocation = document.querySelector('#error');
        errorLocation.innerText = "Please enter more characters!";
    }
}

