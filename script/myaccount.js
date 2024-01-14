const depositBTN = document.querySelector('.deposit-box');
const sectionHome = document.querySelector('.section__home');
const sectionCards = document.querySelector('.section__cards');
const sectionSettings = document.querySelector('.section__settings');
const sectionDeposit = document.querySelector('.section__deposit');
const menuElements = document.querySelectorAll('.menu-element');

menuElements.forEach((elements, index) => {
    console.log("menu")
    elements.classList.remove("active")

    elements.addEventListener("click", function () {
        console.log("work-m")
        switch (index) {
            case 0:
                sectionHome.classList.add("active")
                sectionCards.classList.remove("active")
                sectionSettings.classList.remove("active")
                sectionDeposit.classList.remove("active")
                depo
                break;
                case 1:
                    sectionCards.classList.add("active")
                    sectionHome.classList.remove("active")
                    sectionSettings.classList.remove("active")
                    sectionDeposit.classList.remove("active")
                    break;
                    case 2:
                        sectionSettings.classList.add("active")
                        sectionCards.classList.remove("active")
                        sectionHome.classList.remove("active")
                        sectionDeposit.classList.remove("active")
                        break;
                        defaulf:
                        sectionHome.classList.add("active")
                        sectionCards.classList.remove("active")
                        sectionSettings.classList.remove("active")
                        sectionDeposit.classList.remove("active")

        }
    })
})


depositBTN.addEventListener("click", ()=>{


    sectionDeposit.classList.add("active")
    sectionCards.classList.remove("active")
    sectionSettings.classList.remove("active")
    sectionHome.classList.remove("active")
})





const themeDark = document.querySelector('.theme-dark');
const themeLight = document.querySelector('.theme-light');
const themeChoose = document.querySelector('.theme-choose');




themeDark.addEventListener("click", () => {


    themeChoose.classList.remove("light")
    themeChoose.classList.add("dark")

})
themeLight.addEventListener("click", () => {

    themeChoose.classList.remove("dark")
    themeChoose.classList.add("light")
})



const langUA = document.querySelector('.language-ukrainian');
const langEN = document.querySelector('.language-english');
const langChoose = document.querySelector('.language-choose');



langUA.addEventListener("click", () => {

    langChoose.classList.remove("EN")
    langChoose.classList.add("UA")


})
langEN.addEventListener("click", () => {

    langChoose.classList.remove("UA")
    langChoose.classList.add("EN")


})





const cardChoose = document.querySelectorAll('.card-choose');
const Cards = document.querySelectorAll('.my__cards-top');

cardChoose[0].addEventListener("click", () => {

    Cards.style.marginLeft = "80px"
    cardChoose[0].style.backgroundColor = "#797979"
    cardChoose[1].style.backgroundColor = "#494949"
    cardChoose[2].style.backgroundColor = "#494949"

})
cardChoose[1].addEventListener("click", () => {

    Cards.style.marginLeft = "-480px"
    cardChoose[1].style.backgroundColor = "#797979"
    cardChoose[0].style.backgroundColor = "#494949"
    cardChoose[2].style.backgroundColor = "#494949"

})
cardChoose[2].addEventListener("click", () => {
    cardChoose[2].style.backgroundColor = "#797979"
    cardChoose[0].style.backgroundColor = "#494949"
    cardChoose[1].style.backgroundColor = "#494949"

    Cards.style.marginLeft = "-1000px"

})






let userName = document.querySelector('.name__block-txt');

let InputName = sessionStorage.getItem("inputname");
let InputSurname = sessionStorage.getItem("inputsurname");




let myCards = JSON.parse(sessionStorage.getItem("myCards"));
let userInfo = JSON.parse(sessionStorage.getItem("UserInfo"));


console.log(myCards)

userName.textContent = InputName + " " + InputSurname


for (let a = myCards.length; a != 0; a--) {
    Cards[0].innerHTML += `<div class="my-card ">
    <div class="my-card__top">
    <p class="my-card__type"></p>
    <img src="" alt="" class="my__card-company">
    </div>
    <p class="my__card-number"></p>
    <p class="my__card-data"></p>
    </div>`
}
for (let a = myCards.length; a != 0; a--) {
    Cards[1].innerHTML += `<div class="my-card card-info">
    <div class="my-card__top">
        <p class="my-card__type">UAH</p>
        <img src="../image/VISA-logo.png" alt="" class="my__card-company">
    </div>
    <p class="my__card-number"></p>
    <p class="my__card-data"></p>
</div>`
}
const cardNumber = document.querySelectorAll('.my__card-number');
const cardExpires = document.querySelectorAll('.my__card-data');
const myCard = document.querySelectorAll('.my-card');
const cardCompany = document.querySelectorAll('.my__card-company');
const cardValuta = document.querySelectorAll('.my-card__type');
for (let i = 0; i != myCards.length; i++) {
    cardNumber[i].innerHTML = myCards[i].number;
    cardExpires[i].innerHTML = myCards[i].expires
    cardCompany[i].src = myCards[i].company
    cardValuta[i].innerHTML = myCards[i].valuta
    myCard[i].style.backgroundColor = myCards[i].background
}
let Index = Math.round(myCard.length / 2)
if(Index === 0){
    Index = 1
}
for (let i = Index; i != myCards.length + Index; i++) {
    cardNumber[i].innerHTML = myCards[i - Index].number;
    cardExpires[i].innerHTML = myCards[i - Index].expires
    cardCompany[i].src = myCards[i - Index].company
    cardValuta[i].innerHTML = myCards[i - Index].valuta
    myCard[i].style.backgroundColor = myCards[i - Index].background
}







if (myCards.length != 3) {
    Cards[0].innerHTML += `<div class="add__card">
    <span>+</span>
    </div>`
    Cards[1].innerHTML += `<div class="add__card">
    <span>+</span>
    </div>`
}
/* const addCard = document.querySelector('.add__card');
addCard.addEventListener("click", ()=>{

    window.location.href = "../pages/card.html" 
    

}) */



sessionStorage.setItem("myCards", JSON.stringify(myCards))




const cardBalanceTxt = document.querySelector('.cards__status-balance');
const cardTypeTxt = document.querySelector('.cards__status-type');




const blockCard = document.querySelector('.block-card');

const cardInfo = document.querySelectorAll('.card-info');
let ActiveCard = ""

cardInfo[0].addEventListener("click", function () {
    cardBalanceTxt.innerHTML = `${myCards[0].balance}${myCards[0].valuta}`
    cardTypeTxt.innerHTML = myCards[0].type
    ActiveCard = 0 
})
/* cardInfo[1].addEventListener("click", function () {
    cardBalanceTxt.innerHTML = `${myCards[1].balance}${myCards[1].valuta}`
    cardTypeTxt.innerHTML = myCards[1].type
    ActiveCard = 1 

}) */

const userTel = document.querySelector('.tel__block-number');
const userEmail = document.querySelector('.email__block-number');
const userPassword = document.querySelector('.password__block-txt');
userTel.innerHTML = userInfo.PhoneNumber
userEmail.innerHTML = userInfo.Email


let HidePassword = ""
for(p = userInfo.Password.length; p != 0; p--){
     HidePassword += "." 
}
userPassword.innerHTML = HidePassword


blockCard.addEventListener("click", (e) => {
    e.preventDefault()
    myCards.splice(ActiveCard, 1);
    console.log(myCards)


})




















/* DEPOSIT */

