/*
This is where I plan to actually implement the vocabulary learning feature.
*/

function signin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    document.getElementById("accountinfo").textContent = "Account: " + username; //Doesn't actually let you sign in yet, lol
    console.log(username);
}