const cardsBtn = document.querySelector('.cards');
const mobileList = document.querySelector(".mobile-list")
const cardsMobileBtn = document.querySelector('.mobile-cards');
const modalCard = document.querySelector('.modal__cards');
const modalClose = document.querySelector('.modal-btn');
const body = document.querySelector('.body');

cardsBtn.addEventListener("click", function(event){
    event.preventDefault()
    body.style.overflow = "hidden"
    mobileList.classList.remove("show")
    modalCard.classList.add("show")
    console.log("This")
    
})



modalClose.addEventListener("click", function(event){
    event.preventDefault()
    
    modalCard.classList.remove("show")
    body.style.overflow = "visible"


})