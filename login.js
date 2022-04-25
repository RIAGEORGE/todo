let username = document.getElementById("username");
let password = document.getElementById("password");

function callback(username,password){
    if(username.value!="admin"){
        alert("Username is incorrect");
        return false;
    }
    else if(password.value!="12345"){
        alert("Password is incorrect");
        return false;
    }
    else{
        window.location = "main.html"; 
        return true;
    }
}
callback(username,password);