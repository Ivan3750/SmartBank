const sectionHome = document.querySelector('.section__home');
const sectionCards = document.querySelector('.section__cards');
/* const sectionDeposit = document.querySelector('.section__deposit');
const sectionCashback = document.querySelector('.section__cashback'); */
const sectionSettings = document.querySelector('.section__settings');
const menuElements = document.querySelectorAll('.menu-element');

menuElements.forEach((elements, index) => {
    console.log("menu")
    elements.classList.remove("active")
    
    elements.addEventListener("click", function() {
        console.log("work-m")
        switch (index){
            case 0: 
                sectionHome.classList.add("active")
                sectionCards.classList.remove("active")
                sectionSettings.classList.remove("active")
                break;
            case 1: 
                sectionCards.classList.add("active")
                sectionHome.classList.remove("active")
                sectionSettings.classList.remove("active")
                break;
            case 2: 
                sectionSettings.classList.add("active")
                sectionCards.classList.remove("active")
                sectionHome.classList.remove("active")
                break;
            defaulf:
                sectionHome.classList.add("active")
                sectionCards.classList.remove("active")
                sectionSettings.classList.remove("active")
                
            }
        })
})


