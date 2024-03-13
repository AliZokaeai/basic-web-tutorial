let loggedIn = false;
let username;
let password;

do{
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username ==="myUserName" && password ==="myPassword"){
        loggedIn = ture;
        console.log("You are logged in!");
    }else{
        console.log("Invalid credentials! Plaease try again");
    }
}while(!loggedIn)