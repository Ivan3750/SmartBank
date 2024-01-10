const sectionHome = document.querySelector('.section__home');
const sectionCards = document.querySelector('.section__cards');
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




const themeDark = document.querySelector('.theme-dark');
const themeLight = document.querySelector('.theme-light');
const themeChoose = document.querySelector('.theme-choose');




themeDark.addEventListener("click", ()=>{

    
    themeChoose.classList.remove("light")
    themeChoose.classList.add("dark")
    
})
themeLight.addEventListener("click", ()=>{
    
    themeChoose.classList.remove("dark")
    themeChoose.classList.add("light")
})



const langUA = document.querySelector('.language-ukrainian');
const langEN = document.querySelector('.language-english');
const langChoose = document.querySelector('.language-choose');



langUA.addEventListener("click", ()=>{
    
    langChoose.classList.remove("EN")
    langChoose.classList.add("UA")


})
langEN.addEventListener("click", ()=>{
    
    langChoose.classList.remove("UA")
    langChoose.classList.add("EN")


})





const cardChoose = document.querySelectorAll('.card-choose');
const Cards = document.querySelector('.my__cards-top');

cardChoose[0].addEventListener("click", ()=>{

Cards.style.marginLeft = "80px"
cardChoose[0].style.backgroundColor = "#797979"
cardChoose[1].style.backgroundColor = "#494949"
cardChoose[2].style.backgroundColor = "#494949"

})
cardChoose[1].addEventListener("click", ()=>{
    
    Cards.style.marginLeft = "-480px"
    cardChoose[1].style.backgroundColor = "#797979"
    cardChoose[0].style.backgroundColor = "#494949"
    cardChoose[2].style.backgroundColor = "#494949"
    
})
cardChoose[2].addEventListener("click", ()=>{
    cardChoose[2].style.backgroundColor = "#797979"
    cardChoose[0].style.backgroundColor = "#494949"
    cardChoose[1].style.backgroundColor = "#494949"

Cards.style.marginLeft = "-1000px"

})