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