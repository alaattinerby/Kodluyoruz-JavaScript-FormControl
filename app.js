var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var userName = document.getElementById("userName");
var pass = document.getElementById("pass");
var conPass = document.getElementById("confirmPass");
var submit = document.getElementById("submit");
var alertMessage = document.getElementById("registerForm");
var messageDiv = document.createElement("div");
var first,last ="";

firstName.addEventListener("keyup", function(){
    first=firstName.value;
    userName.value=("@"+first+last).toLowerCase();  
});

lastName.addEventListener("keyup", function(){
    last=lastName.value;  
    userName.value=("@"+first+last).toLowerCase();  
});

submit.addEventListener("click", function(){

    if(pass.value.length >= 8){
        
        if(pass.value === conPass.value){
            messageDiv.textContent="Hoşgeldin " + "@"+(first+last).toLowerCase();
            messageDiv.classList="registerForm__welcome";
            alertMessage.appendChild(messageDiv);
        }
        else{
            messageDiv.textContent="Parolalar Eşleşmiyor.. Kontrol Ediniz !!";
            messageDiv.classList="registerForm__error";
            alertMessage.appendChild(messageDiv);
        }
    }
    else{
        messageDiv.textContent="Şifre En Az 8 Karakterden Oluşmalıdır !!";
            messageDiv.classList="registerForm__error";
            alertMessage.appendChild(messageDiv);
    }
});


