const cardsBtns = document.querySelectorAll('.cards');
const mobileList = document.querySelector(".mobile-list")
const cardsMobileBtn = document.querySelector('.mobile-cards');
const modalCard = document.querySelector('.modal__cards');
const modalClose = document.querySelector('.modal-btn');
const body = document.querySelector('.body');

cardsBtns.forEach(function(cardsBtn) {
    cardsBtn.addEventListener("click", function(event) {
      console.log("Work");
      event.preventDefault();
      body.style.overflow = "hidden";
      mobileList.classList.remove("show");
      modalCard.classList.add("show");
    });
  });



modalClose.addEventListener("click", function(event){
    event.preventDefault()
    
    modalCard.classList.remove("show")
    body.style.overflow = "visible"


})

const openBtn = document.querySelector('.img-menu');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener("click", function(){
    mobileList.classList.add("show")
})
closeBtn.addEventListener("click", function(){
    mobileList.classList.remove("show")

})
