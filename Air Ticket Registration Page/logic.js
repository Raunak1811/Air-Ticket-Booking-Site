//Green Panel SignUp & SignIn Button
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
})

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
})


//ForgotPassword Button
document.getElementById("forgotPass").addEventListener("mouseover", mouseOver);
document.getElementById("forgotPass").addEventListener("mouseout", mouseOut);
document.getElementById("forgotPass").addEventListener("click", forgotPw);

function forgotPw(){
    alert("Enter email, a password reset link will be sent!");
}

function mouseOver() {
  document.getElementById("forgotPass").style.color = "red";
}

function mouseOut() {
  document.getElementById("forgotPass").style.color = "black";
}


//Password checker
    //for SignIn Password
var password = document.getElementById("password");
password.addEventListener("keyup",function(){
    validpw(password.value);

})

function validpw(pswd){
    if(pswd.length>=8) {

        valid("length");
        //document.getElementById("length").classList.add("valid");
        //document.getElementById("length").classList.remove("invalid");

            //AddClass("length", "valid");
            //RemoveClass("length","invalid");

        //document.getElementById("length").firstChild.classList.remove("fa-times");
        //document.getElementById("length").firstChild.classList.add("fa-check");
        
            //AddClassOnIcon("length","fa-check");
            //RemoveClassOnIcon("length","fa-times");

    }
    else{
        invalid("length");
        //document.getElementById("length").classList.add("invalid");
        //document.getElementById("length").classList.remove("valid");

            //AddClass("length", "invalid");
            //RemoveClass("length","valid");

        //document.getElementById("length").firstChild.classList.add("fa-times");
        //document.getElementById("length").firstChild.classList.remove("fa-check");
        
            //AddClassOnIcon("length","fa-times");
            //RemoveClassOnIcon("length","fa-check");
    }

    if(pswd.match(/[A-Z]/)){
        valid("upper");
        }
        else{
        invalid("upper");
        }
    

    if(pswd.match(/[a-z]/)){
        valid("lower");
        }
        else{
        invalid("lower");
        }
    
     if(pswd.match(/\d/)){
        valid("number");
        }
        else{
        invalid("number");
        }

    if(pswd.match(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)){
        valid("special_character");
        }
        else{
        invalid("special_character");
        }
    }

    //for SignUp Password
var password1 = document.getElementById("password1");
password1.addEventListener("keyup",function(){
    validpw1(password1.value);
})

function validpw1(pswd){
    if(pswd.length>=8){
        valid("length");
    }
    else{
        invalid("length");
    }

    if(pswd.match(/[A-Z]/)){
        valid("upper");
        }
        else{
        invalid("upper");
        }
    
    if(pswd.match(/[a-z]/)){
        valid("lower");
        }
        else{
        invalid("lower");
        }
    
    if(pswd.match(/\d/)){
        valid("number");
        }
        else{
        invalid("number");
        }

    if(pswd.match(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)){
        valid("special_character");
        }
        else{
        invalid("special_character");
        }
    }

//for SignIn Email checker
var email = document.getElementById("email");
var email1 = document.getElementById("email1");

email.addEventListener("keyup",function(){
    validmail(email.value);

})

email1.addEventListener("keyup",function(){
    validmail(email1.value);

})

function validmail(mail){
    if(mail.match(/[@]/)) {
        valid("attherate");
    }
    else{
        invalid("attherate");
    }

    if(mail.match(/[.]/)){
        valid("dot");
    }
    else{
        invalid("dot");
    }

    if(mail.match(/[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/)){
        invalid("other_special_char");
    }
    else{
        valid("other_special_char");
    }

    if(mail.match(" ")){
        invalid("space");
    }
    else{
        valid("space");
    }
}
    

function valid(id){
    AddClass(id, "valid");
    RemoveClass(id,"invalid");
    AddClassOnIcon(id,"fa-check");
    RemoveClassOnIcon(id,"fa-times");
}

function invalid(id){
    AddClass(id, "invalid");
    RemoveClass(id,"valid");
    AddClassOnIcon(id,"fa-times");
    RemoveClassOnIcon(id,"fa-check");               
}

function AddClass(id,cl){
    document.getElementById(id).classList.add(cl);
}

function RemoveClass(id,cl){
    document.getElementById(id).classList.remove(cl);
}

function AddClassOnIcon(id,cl){
    document.getElementById(id).firstChild.classList.add(cl);
}
  
function RemoveClassOnIcon(id,cl){
    document.getElementById(id).firstChild.classList.remove(cl);
}




//Password and Email hover effect

document.getElementById("password").addEventListener("mouseout", passpointerOut);
document.getElementById("password").addEventListener("mouseover", passpointerIn);
document.getElementById("email").addEventListener("mouseout", emailpointerOut);
document.getElementById("email").addEventListener("mouseover", emailpointerIn);
document.getElementById("password1").addEventListener("mouseout", passpointerOut);
document.getElementById("password1").addEventListener("mouseover", passpointerIn);
document.getElementById("email1").addEventListener("mouseout", emailpointerOut);
document.getElementById("email1").addEventListener("mouseover", emailpointerIn);


function passpointerOut() {
    document.getElementById("pswd_info").style.display = "none";
}

function emailpointerOut(){
    document.getElementById("email_info").style.display = "none";
}

function passpointerIn() {
    document.getElementById("pswd_info").style.display = "block";
}

function emailpointerIn() {
    document.getElementById("email_info").style.display = "block";
}



//SignIn Button Function
function validate()
{
    var mail = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var conpassword = document.getElementById("conpassword").value;
    var RegExp = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if(RegExp.email(mail)==true) {
        alert("valid.")
    }
    else if(password == conpassword)
    {
        alert("login successful, Welcome!");
        window.location.href="C:\Users\mindc1july209\Desktop\HTML_Assignment1\AirIndiaHome.html";
        return false;
    }
    else if(password != conpassword)
    {
        alert("Please confirm password, password doesn't match");
    }
    else if(mail==" " || password == conpassword || conpassword != password){
        alert("Please enter regitered email");
    }
    else{
        alert("login failed, retry!");
        return false;
    }
}

function update()
{   
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    if((email=! null) && (password =! null) && (repassword =! null))
    {
        alert("login successful, Welcome!");
        window.location.href="C:\Users\mindc1july209\Desktop\HTML_Assignment1\AirIndiaHome.html";
        return false;
    }
    
    else{
        alert("login failed, retry!");
    }
}

