const depositBTN = document.querySelector('.deposit-box');
const creditBTN = document.querySelector('.credit-box');
const cashbackBTN = document.querySelector('.cashback-box');
const sectionHome = document.querySelector('.section__home');
const sectionCards = document.querySelector('.section__cards');
const sectionSettings = document.querySelector('.section__settings');
const sectionDeposit = document.querySelector('.section__deposit');
const sectionCredit = document.querySelector('.section__credit');
const sectionCashback = document.querySelector('.section__cashback');
const sectionValuta = document.querySelector('.section__valuta');
const menuElements = document.querySelectorAll('.menu-element');
const valutaBTN = document.querySelector('#valuta__more');
const inputValuta = document.querySelectorAll('.input-valuta');
const seceltOne = document.getElementById('valuta__one');
const seceltTwo = document.getElementById('valuta__two');



let myCards = JSON.parse(sessionStorage.getItem("myCards"));
let userInfo = JSON.parse(sessionStorage.getItem("UserInfo"));




let loadCard = function(cardNumFunc, cardExpFunc,cardComFunc, cardValFunc, cardBGCFunc){
    if( screen.availWidth > 768){

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
                <p class="my-card__type"></p>
                <img src="" alt="" class="my__card-company">
            </div>
            <p class="my__card-number"></p>
            <p class="my__card-data"></p>
        </div>`
        }
    }else{
        Cards[0].innerHTML = `<div class="my-card ">
    <div class="my-card__top">
    <p class="my-card__type"></p>
    <img src="" alt="" class="my__card-company">
    </div>
    <p class="my__card-number" id = "test"></p>
    <p class="my__card-data"></p>
    </div>`
        Cards[1].innerHTML = `<div class="my-card ">
    <div class="my-card__top">
    <p class="my-card__type"></p>
    <img src="" alt="" class="my__card-company">
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

cardNumber[0].innerHTML = cardNumFunc;
cardExpires[0].innerHTML = cardExpFunc
cardCompany[0].src = cardComFunc
cardValuta[0].innerHTML = cardValFunc
myCard[0].style.backgroundColor = cardBGCFunc
cardNumber[1].innerHTML = cardNumFunc;
cardExpires[1].innerHTML = cardExpFunc
cardCompany[1].src = cardComFunc
cardValuta[1].innerHTML = cardValFunc
myCard[1].style.backgroundColor = cardBGCFunc
}



    console.log(myCards.length)
    const cardsMenu = document.querySelectorAll('.my__cards-menu');
    console.log(cardsMenu)
    if(myCards.length != 3){
        for(let i = myCards.length+1; i != 0; i--){
            cardsMenu[0].innerHTML += `<div class="card-choose"></div>`
            cardsMenu[1].innerHTML += `<div class="card-choose--info"></div>`
        }

    }else{

        for(let i = myCards.length; i != 0; i--){
            cardsMenu[0].innerHTML = `<div class="card-choose"></div>`
            cardsMenu[1].innerHTML = `<div class="card-choose--info"></div>`
        }
    }



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
                sectionCredit.classList.remove("active")
                sectionCashback.classList.remove("active")
                sectionValuta.classList.remove("active")
                
                break;
                case 1:
                    sectionCards.classList.add("active")
                    sectionHome.classList.remove("active")
                    sectionSettings.classList.remove("active")
                    sectionDeposit.classList.remove("active")
                    sectionCredit.classList.remove("active")
                    sectionCashback.classList.remove("active")
                    sectionValuta.classList.remove("active")
                    break;
                case 2:
                    sectionSettings.classList.add("active")
                    sectionCards.classList.remove("active")
                    sectionHome.classList.remove("active")
                    sectionDeposit.classList.remove("active")
                    sectionCredit.classList.remove("active")
                    sectionCashback.classList.remove("active")
                    sectionValuta.classList.remove("active")
                    break;
                defaulf:
                sectionHome.classList.add("active")
                sectionCards.classList.remove("active")
                sectionSettings.classList.remove("active")
                sectionDeposit.classList.remove("active")
                sectionCredit.classList.remove("active")
                sectionCashback.classList.remove("active")
                sectionValuta.classList.remove("active")

        }
    })
})


depositBTN.addEventListener("click", ()=>{


    sectionDeposit.classList.add("active")
    sectionCards.classList.remove("active")
    sectionSettings.classList.remove("active")
    sectionHome.classList.remove("active")
    sectionCredit.classList.remove("active")
    sectionCashback.classList.remove("active")
    sectionValuta.classList.remove("active")
})
creditBTN.addEventListener("click", ()=>{


    sectionCredit.classList.add("active")
    sectionDeposit.classList.remove("active")
    sectionCards.classList.remove("active")
    sectionSettings.classList.remove("active")
    sectionHome.classList.remove("active")
    sectionCashback.classList.remove("active")
    sectionValuta.classList.remove("active")
})
cashbackBTN.addEventListener("click", ()=>{


    sectionCredit.classList.remove("active")
    sectionDeposit.classList.remove("active")
    sectionCards.classList.remove("active")
    sectionSettings.classList.remove("active")
    sectionHome.classList.remove("active")
    sectionCashback.classList.add("active")
    sectionValuta.classList.remove("active")
})
valutaBTN.addEventListener("click", ()=>{


    sectionCredit.classList.remove("active")
    sectionDeposit.classList.remove("active")
    sectionCards.classList.remove("active")
    sectionSettings.classList.remove("active")
    sectionHome.classList.remove("active")
    sectionCashback.classList.remove("active")
    sectionValuta.classList.add("active")
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
const cardChooseInfo = document.querySelectorAll('.card-choose--info');
const Cards = document.querySelectorAll('.my__cards-top');

cardChoose[0].addEventListener("click", () => {
    loadCard(myCards[0].number, myCards[0].expires, myCards[0].company, myCards[0].valuta, myCards[0].background)
    cardChoose[0].style.backgroundColor = "#797979"
    cardChoose[1].style.backgroundColor = "#494949"
    cardChoose[2].style.backgroundColor = "#494949"
    cardChooseInfo[0].style.backgroundColor = "#797979"
    cardChooseInfo[1].style.backgroundColor = "#494949"
    cardChooseInfo[2].style.backgroundColor = "#494949"
    
})
cardChoose[1].addEventListener("click", () => {
    
    loadCard()
    if(myCards[1] != undefined){
        loadCard(myCards[1].number, myCards[1].expires, myCards[1].company, myCards[1].valuta, myCards[1].background)
        
    }else{
        Cards[0].innerHTML = `<div class="add__card">
        <span>+</span>
    </div>`
        Cards[1].innerHTML = `<div class="add__card">
        <span>+</span>
        </div>`
    }
    cardChoose[1].style.backgroundColor = "#797979"
    cardChoose[0].style.backgroundColor = "#494949"
    cardChoose[2].style.backgroundColor = "#494949"
    cardChooseInfo[1].style.backgroundColor = "#797979"
    cardChooseInfo[0].style.backgroundColor = "#494949"
    cardChooseInfo[2].style.backgroundColor = "#494949"

})
cardChoose[2].addEventListener("click", () => {
    loadCard()
    if(myCards[2] != undefined){
        loadCard(myCards[2].number, myCards[2].expires, myCards[2].company, myCards[2].valuta, myCards[2].background)
        
    }else{
        Cards[0].innerHTML = `<div class="add__card">
    <span>+</span>
    </div>`
        Cards[1].innerHTML = `<div class="add__card">
    <span>+</span>
    </div>`
    }
    cardChoose[2].style.backgroundColor = "#797979"
    cardChoose[0].style.backgroundColor = "#494949"
    cardChoose[1].style.backgroundColor = "#494949"
    cardChooseInfo[2].style.backgroundColor = "#797979"
    cardChooseInfo[0].style.backgroundColor = "#494949"
    cardChooseInfo[1].style.backgroundColor = "#494949"


})
cardChooseInfo[0].addEventListener("click", () => {
    loadCard(myCards[0].number, myCards[0].expires, myCards[0].company, myCards[0].valuta, myCards[0].background)
    cardChooseInfo[0].style.backgroundColor = "#797979"
    cardChooseInfo[1].style.backgroundColor = "#494949"
    cardChooseInfo[2].style.backgroundColor = "#494949"
    cardChoose[0].style.backgroundColor = "#797979"
    cardChoose[1].style.backgroundColor = "#494949"
    cardChoose[2].style.backgroundColor = "#494949"
    
})
cardChooseInfo[1].addEventListener("click", () => {
    
    loadCard()
    if(myCards[1] != undefined){
        loadCard(myCards[1].number, myCards[1].expires, myCards[1].company, myCards[1].valuta, myCards[1].background)
        
    }else{
        Cards[0].innerHTML = `<div class="add__card">
        <span>+</span>
    </div>`
        Cards[1].innerHTML = `<div class="add__card">
        <span>+</span>
        </div>`
    }
    cardChooseInfo[1].style.backgroundColor = "#797979"
    cardChooseInfo[0].style.backgroundColor = "#494949"
    cardChooseInfo[2].style.backgroundColor = "#494949"
    cardChoose[1].style.backgroundColor = "#797979"
    cardChoose[0].style.backgroundColor = "#494949"
    cardChoose[2].style.backgroundColor = "#494949"

})
cardChooseInfo[2].addEventListener("click", () => {
    loadCard()
    if(myCards[2] != undefined){
        loadCard(myCards[2].number, myCards[2].expires, myCards[2].company, myCards[2].valuta, myCards[2].background)
        
    }else{
        Cards[0].innerHTML = `<div class="add__card">
    <span>+</span>
    </div>`
        Cards[1].innerHTML = `<div class="add__card">
    <span>+</span>
    </div>`
    }
    cardChooseInfo[2].style.backgroundColor = "#797979"
    cardChooseInfo[0].style.backgroundColor = "#494949"
    cardChooseInfo[1].style.backgroundColor = "#494949"
    cardChoose[2].style.backgroundColor = "#797979"
    cardChoose[0].style.backgroundColor = "#494949"
    cardChoose[1].style.backgroundColor = "#494949"


})







let userName = document.querySelector('.name__block-txt');

let InputName = sessionStorage.getItem("inputname");
let InputSurname = sessionStorage.getItem("inputsurname");







console.log(myCards)

userName.textContent = InputName + " " + InputSurname

if( screen.availWidth > 768){

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
            <p class="my-card__type"></p>
            <img src="" alt="" class="my__card-company">
        </div>
        <p class="my__card-number"></p>
        <p class="my__card-data"></p>
    </div>`
    }
}else{
    loadCard(myCards[0].number, myCards[0].expires, myCards[0].company, myCards[0].valuta, myCards[0].background)

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
const addCard = document.querySelector('.add__card');
addCard.addEventListener("click", ()=>{

    window.location.href = "../pages/card.html" 
    

})



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

if(cardInfo[1] != undefined){
    cardInfo[1].addEventListener("click", function () {
        cardBalanceTxt.innerHTML = `${myCards[1].balance}${myCards[1].valuta}`
        cardTypeTxt.innerHTML = myCards[1].type
        ActiveCard = 1 
    
    })

}
if(cardInfo[2] != undefined){
    cardInfo[2].addEventListener("click", function () {
        cardBalanceTxt.innerHTML = `${myCards[2].balance}${myCards[2].valuta}`
        cardTypeTxt.innerHTML = myCards[2].type
        ActiveCard = 2
    })

}




const userTel = document.querySelector('.tel__block-number');
const userEmail = document.querySelector('.email__block-number');
const userPassword = document.querySelector('.password__block-txt');
if(userInfo != undefined){
    userTel.innerHTML = userInfo.PhoneNumber
    userEmail.innerHTML = userInfo.Email
    let HidePassword = ""
    for(p = userInfo.Password.length; p != 0; p--){
         HidePassword += "." 
    }
    userPassword.innerHTML = HidePassword

}




blockCard.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(myCards.splice(0, 1))
    myCards.splice(0, 1);
    
    sessionStorage.setItem("myCards", JSON.stringify(myCards));

    console.log(myCards)


})



















/* DEPOSIT */
