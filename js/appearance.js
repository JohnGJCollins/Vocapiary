var textState = false;

function winner() {
    textState = !textState;
    var lineText = "The technology you're looking for does not exist yet, but you'll get something cool if you click the button anyway!";
    var buttonText = "Start Learning";

    if(textState) {
        lineText = "trolled";
        buttonText = "untroll yourself";
    }

    document.getElementById("technologyline").textContent = lineText;
    document.getElementById("technologybutton").textContent = buttonText;
}

var theme = 0;

function changeTheme() {
    theme = (theme + 1) % 2; //change mod to the number of themes
    var source = "../css/darktheme.css";
    
    switch (theme) {
        case 0:
            source = "../css/hivetheme.css";
            break;
        default: //I like to have this here so it's explicit that I've already handled the default case
            break;
    }

    document.getElementById("styleswitch").setAttribute("href", source);
}