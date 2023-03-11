const loginr=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginr.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginr.classList.remove('active')
})

function auth(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email=="admin@admin.com" && password=="admin"){
        window.location.assign("../HTML/studportal.html");
        alert("Login Successfully");
    }
    else{
        alert("Invalid Information")
        return;
    }
}