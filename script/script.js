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




/* const cardsBtn = document.querySelector('.cards');
const modalCard = document.querySelector('.modal__cards');
const modalClose = document.querySelector('.modal-btn');
const body = document.querySelector('.body');

cardsBtn.addEventListener("click", function(event){
    event.preventDefault()
    modalCard.classList.add("show")
    body.style.overflow = "hidden"
    
})


modalClose.addEventListener("click", function(event){
    event.preventDefault()
    
    modalCard.classList.remove("show")
    body.style.overflow = "visible"


}) */
