//Creates local variables to handle the HTML elements
let menu = document.getElementById("MainMenu");
menu.style.visibility = "hidden";
let optionsmenu = document.getElementById("OptionsMenu");
optionsmenu.style.visibility = "hidden";
let changelevelmenu = document.getElementById("ChangeLevelMenu");
changelevelmenu.style.visibility = "hidden";
let logo = document.getElementById("logo");
logo.style.visibility = "hidden";

let clear = document.getElementById("levelCleared");
clear.style.visibility = "hidden";
let dead = document.getElementById("dead");
dead.style.visibility = "hidden";
let end = document.getElementById("end");
end.style.visibility = "hidden";
let training = document.getElementById("training");
training.style.visibility = "hidden";


//Calls the respective function to handle when the user presses the keyboard
let x = 0;
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode === 27) {
        if (x % 2 !== 0) {
            //Hide everything if 'ESC' is pressed
            menu.style.visibility = "hidden";
            logo.style.visibility = "hidden";
            optionsmenu.style.visibility = "hidden";
            changelevelmenu.style.visibility = "hidden";
        }

        if (x % 2 === 0) {
            //Make the main menu visible if 'ESC' is pressed again
            menu.style.visibility = "visible";
            logo.style.visibility = "visible";
        }
        x += 1;
    }
}

//Hides the main menu when 'Resume' is selected in the main menu
function minimize() {
    menu.style.visibility = "hidden";
    logo.style.visibility = "hidden";
}

//Reloads the current level
function restartLevel() {
    let levelNum = sessionStorage.getItem('LevelNumber');

    if(levelNum === "1"){
        window.location.href = "index.html";
    }
    if(levelNum === "2"){
        window.location.href = "Level2.html";
    }
    if(levelNum === "3"){
        window.location.href = "Level3.html";
    }
    if(levelNum === "4"){
        window.location.href = "Level4.html";
    }
}

//Changes to the level menu by hiding the main menu when 'Change level' is selected
function changeLevelMenu(x) {
    menu.style.visibility = "hidden";
    changelevelmenu.style.visibility = "visible";
    if(x === 1){
        window.location.href = "index.html";
    }
    if(x === 2){
        window.location.href = "Level2.html";
    }
    if(x === 3){
        window.location.href = "Level3.html";
    }
    if(x === 4){
        window.location.href = "Level4.html";
    }

}

//Changes to the options menu by hiding the main menu when 'Options' is selected
function optionsMenu() {
    menu.style.visibility = "hidden";
    optionsmenu.style.visibility = "visible";
}

//Hides all another menus and makes main menu visible when 'Main Menu' is selected
function returnToMainMenu() {
    menu.style.visibility = "visible";
    optionsmenu.style.visibility = "hidden";
    changelevelmenu.style.visibility = "hidden";
}

//Enables fullscreen mode
function fullScreen(){
    document.documentElement.requestFullscreen();
}

//Alerts the player as to how to play in the 1st person
function firstPerson(){
    alert("Press V for First Person view")
}

//Plays the opening Star Wars cinematic html file
function playIntro(){
    window.location.href = "StarWarsIntro.html"
}

