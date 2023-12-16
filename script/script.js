let mediaScreen = window.matchMedia("(max-width: 700px)")
const logoMain = document.querySelector('.logo');
/* STYLE */

function Screen(){
    if (mediaScreen.matches) {
        logoMain.src = "./image/favicon.png" 
    } else {
        logoMain.src = "./image/logo.png" 

    }
}

mediaScreen.addEventListener("change", function(){
    Screen()
    
    
})
Screen()