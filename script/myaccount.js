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

const UAH = {'EUR': 0.025, 'USD': 0.027, 'DKK': 0.18, 'PLN': 0.12, 'GBP': 0.021};
const EUR = {'UAH': 39.15, 'USD': 1.09, 'DKK': 7.45, 'PLN': 4.5, 'GBP': 0.87};
const USD = {'UAH': 35.79, 'EUR': 0.91, 'DKK': 6.81, 'PLN': 3.8, 'GBP': 0.75};
const DKK = {'UAH': 5.25, 'EUR': 0.13, 'USD': 0.14, 'PLN': 0.22, 'GBP': 0.12};
const PLN = {'UAH': 8.33, 'EUR': 0.22, 'USD': 0.26, 'DKK': 4.55, 'GBP': 0.22};
const GBP = {'UAH': 47.62, 'EUR': 1.15, 'USD': 1.33, 'DKK': 8.33, 'PLN': 4.55};


let ChangeValuta = document.querySelector(".calc__change-btn");


let FromValuta = document.getElementById("from_valuta");
let ToValuta = document.getElementById("to_valuta");
let FromNum = document.getElementById("FromNum");
let ToNum = document.getElementById("ToNum");
FromNum.value = 0.00
ToNum.value = 0.00
ChangeValuta.addEventListener("click", function(){
    const SaveInfo = [FromValuta.value,ToValuta.value, FromNum.value, ToNum.value]
    FromValuta.value = SaveInfo[1]
    ToValuta.value = SaveInfo[0]
    FromNum.value = SaveInfo[3]
    ToNum.value = SaveInfo[2]

    

})

const convert = document.querySelector('.valuta__btn');

convert.addEventListener("click", function (event) {
    event.preventDefault();
    
    let FromValuta = document.getElementById("from_valuta").value;
    let ToValuta = document.getElementById("to_valuta").value;
    let FromNum = document.getElementById("FromNum").value;
    let ToNum = document.getElementById("ToNum");
    console.log(FromNum)
    if ((ToValuta != FromValuta) && (FromNum > 0)){
        let Result = 0;
        switch (FromValuta) {
            case 'UAH':
                Result = UAH[ToValuta]*FromNum;
                break;
            case 'EUR':
                Result = EUR[ToValuta]*FromNum;
                break;
            case 'USD':
                Result = USD[ToValuta]*FromNum;
                break;
            case 'DKK':
                Result = DKK[ToValuta]*FromNum;
                break;
            case 'PLN':
                Result = PLN[ToValuta]*FromNum;
                break;
            case 'GBP':
                Result = GBP[ToValuta]*FromNum;
                break;
            default:
                console.error("Error");
                return;
            }
            Result = Math.round(Result*100)/100
            ToNum.value = Result
            console.log(Result)
                    
    }else if((ToValuta == FromValuta) && (FromNum > 0)){
        alert("Ведіть вірні дані ");
        
    }else{
        alert("Ведіть вірне число ");

    }
                    
});































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
cardInfo[1].addEventListener("click", function () {
    cardBalanceTxt.innerHTML = `${myCards[1].balance}${myCards[1].valuta}`
    cardTypeTxt.innerHTML = myCards[1].type
    ActiveCard = 1 

})
/* cardInfo[2].addEventListener("click", function () {
    cardBalanceTxt.innerHTML = `${myCards[2].balance}${myCards[2].valuta}`
    cardTypeTxt.innerHTML = myCards[2].type
    ActiveCard = 2
})

 */


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
    console.log(myCards.splice(0, 1))
    myCards.splice(0, 1);
    
    sessionStorage.setItem("myCards", JSON.stringify(myCards));

    console.log(myCards)


})




















/* DEPOSIT */
