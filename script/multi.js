

let mediaScreens = window.matchMedia("(max-width: 700px)")
const logoMain = document.querySelector('.logo');
/* STYLE */

function Screen(){
    if (mediaScreens.matches) {
        logoMain.src = "../image/favicon.png" 
    } else {
        logoMain.src = "../image/logo.png" 

    }
}

mediaScreens.addEventListener("change", function(){
    Screen()
    
    
})
Screen()