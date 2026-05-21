// Declare variables

const user = "admin.alexadesk";
const pass = "@lexa67_";

// add function

function inputLogin (){
    let userNameInput = document.getElementById("UserName").value 
    let passCodeInput = document.getElementById("PassWord").value 
    let feedback = document.getElementById("feedback");

// test by using if-then-else
    if (user === userNameInput && pass === passCodeInput){

    document.getElementById("feedback").innerHTML =
    "Login successful. Welcome to your account!";

    window.location.href = "notebook.html";

    }
    
    else {
         document.getElementById("feedback").innerHTML="Wrong credentials. Please try again.";
    }
    
}

