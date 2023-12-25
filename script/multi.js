const mobileList = document.querySelector(".mobile-list")
const openBtn = document.querySelector('.img-menu');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener("click", function(){
    console.log("ok")
        mobileList.classList.add("show")
})
closeBtn.addEventListener("click", function(){
    console.log("ok")
        mobileList.classList.remove("show")

})


let mediaScreen = window.matchMedia("(max-width: 700px)")
const logoMain = document.querySelector('.logo');
/* STYLE */

function Screen(){
    if (mediaScreen.matches) {
        logoMain.src = "../image/favicon.png" 
    } else {
        logoMain.src = "../image/logo.png" 

    }
}

mediaScreen.addEventListener("change", function(){
    Screen()
    
    
})
Screen()