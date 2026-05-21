const user = "admin.alexadesk";
const pass = "@lexa67_";

function inputLogin(){

    let userNameInput = document.getElementById("UserName").value;
    let passCodeInput = document.getElementById("PassWord").value;

    if(user === userNameInput && pass === passCodeInput){

        alert("Login successful!");

        window.location.href = "./notebook.html";
    }

    else{
        document.getElementById("feedback").innerHTML =
        "Wrong credentials. Please try again.";
    }
}
