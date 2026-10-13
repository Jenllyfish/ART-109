//console.log("javascript!") 

// select html elements
const header = document.querySelector("#header");
const changeHeaderButton = document.querySelector("#change-header-button");
const changeThemeButton = document.querySelector("#change-theme-button");

// change header with button click
changeHeaderButton.addEventListener("click", () => {
    header.innerHTML = "POW!!!";
}
)

function changeButtonText(){
    if (   document.body.classList.contains("dark")) {
        changeThemeButton.textContent = "Switch to Light Theme"
    } else {
         changeThemeButton.textContent = "Switch to Light Theme"
    }
}

// toggle color theme
changeThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
}
)