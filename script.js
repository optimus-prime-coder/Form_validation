let username = document.getElementById('username')
let password = document.getElementById('password')
let button = document.getElementById('btn')
let passError = document.getElementById('passError')
let userError = document.getElementById('userError')
let confirmpassword = document.getElementById('confirmpassword')
let confirmPassError = document.getElementById('confirmPassError')
let checkbox = document.querySelector('.check')

 button.onclick = () => {
    

        if(username.value == "" || username.value == null){
        userError.innerText = 'username cannot be null'
        userError.style.color = "red"
        userError.style.fontSize = "10px"
        setTimeout(() => {
            userError.style.display = "none"
            }, 1000);

            return false
        }

        else if (password.value == "" || password.value == null){
        passError.innerText = 'password cannot be null'
        passError.style.color = "red"
        passError.style.fontSize = "10px"
        setTimeout(() => {
            passError.style.display = "none"
            }, 1000);

            return false
        }

        else if (password.value != confirmpassword.value){
            confirmPassError.innerText = 'password not the same'
            confirmPassError.style.color = "red"
            confirmPassError.style.fontSize = "10px"
            setTimeout(() => {
            confirmPassError.style.display = "none"
            }, 1000);

            return false
        }
         if( password.value.length < 5){
            passError.innerText = 'password too short'
        passError.style.color = "red"
        passError.style.fontSize = "10px"
        setTimeout(() => {
            passError.style.display = "none"
            }, 1000);

            return false
        }

        alert('success')
     
}
    
checkbox.addEventListener('change',() => {
    if(checkbox.checked){
        localStorage.setItem("username",username.value)
        let getuser = localStorage.getItem("username")
        localStorage.setItem("password",password.value)
        let getpassword = localStorage.getItem("password")
        localStorage.setItem("confirmPassword",confirmpassword.value)
        let confrimPass = localStorage.getItem("confirmpassword")
    
    
    }
    })


if(localStorage.getItem("username") && localStorage.getItem("password") && localStorage.getItem("confirmPassword")){
    let getReloadUser = localStorage.getItem("username")
    username.value = getReloadUser
    let getpass = localStorage.getItem("password")
    password.value = getpass
    let confirmpass = localStorage.getItem("confirmPassword")
    confirmpassword.value = confirmpass
}

    
