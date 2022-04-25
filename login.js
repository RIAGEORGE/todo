function validate(callback){
    let username = document.getElementById("username");
let password = document.getElementById("password");


    if(username.value.trim!="admin"){
        alert("Username is incorrect");
        callback();
        return false;
       
    }
    else if(password.value.trim!="12345"){
        alert("Password is incorrect");
        callback();
        return false;
    }
    else{
        
        return true;
    }
}
function redirect(){
    wimdows.location="main.html";
}