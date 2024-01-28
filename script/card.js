const cardName = document.querySelector('.card__fullname-info');
const InputSurname = document.querySelector('.create-form-surname');
const InputName = document.querySelector('.create-form-name');
const CreateBtn = document.querySelector('.create-form-btn');
const valutaCard = document.querySelectorAll('.Valuta');
const radioWhite = document.querySelector(".radio-white");
const radioPink = document.querySelector(".radio-pink");
const radioBlack = document.querySelector(".radio-black");
const cardNew = document.querySelector('.card');
const cardNumber = document.querySelector('.card__number');
const cardFullname = document.querySelector('.card__fullname-text');
const cardFullnameTxt = document.querySelector('.card__fullname-info');
const cardExpires = document.querySelector('.card__expires-text');
const cardExpiresTxt = document.querySelector('.card__expires-number');
const CVV = document.querySelector('.CVV');
const miniCardbox = document.querySelector('.mini-card-box');
radioBlack.checked = true;

InputName.addEventListener("input", function(){
    cardName.innerHTML = InputName.value + " " + InputSurname.value
})

InputSurname.addEventListener("input", function(){
    cardName.innerHTML = InputName.value + " " + InputSurname.value
})


let ValutaInfo = ""

let statusValuta = false
valutaCard[0].addEventListener("click", function(){
    if(ValutaInfo != "COIN"){

        valutaCard[0].style.border = "2px solid blue"
        valutaCard[1].style.border = "0"
        valutaCard[2].style.border = "0"
        ValutaInfo = "USD"
        statusValuta = true    
    }
})

valutaCard[1].addEventListener("click", function(){
    if(ValutaInfo != "COIN"){
        
        valutaCard[1].style.border = "2px solid blue"
        valutaCard[0].style.border = "0"
        valutaCard[2].style.border = "0"
        ValutaInfo = "UAH"
        statusValuta = true    
    }
    
})

valutaCard[2].addEventListener("click", function(){
    if(ValutaInfo != "COIN"){
        
        valutaCard[2].style.border = "2px solid blue"
        valutaCard[1].style.border = "0"
        valutaCard[0].style.border = "0"
        ValutaInfo = "EUR"
        statusValuta = true    
        
    }
})
let cardNumberInfo = ""
let cardExpiresInfo = ""
CreateBtn.addEventListener("click", function(event){
    event.preventDefault()
        let min = 1000;
        let max = 9999;
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        let randomNumend = Math.floor(Math.random() * (max - min + 1)) + min;
        let randomtoNum = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        let randCVV = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        cardNumber.innerHTML = `3750 87${randomtoNum} ${randomNum} ${randomNumend}`
        cardNumberInfo = `3750 87${randomtoNum} ${randomNum} ${randomNumend}`
        const currentDate = new Date();
        CVV.innerHTML = randCVV
        cardExpiresTxt.innerHTML = currentDate.getMonth() + 1 + "/" + (Number(currentDate.getFullYear()) - 1995)
        cardExpiresInfo = currentDate.getMonth() + 1 + "/" + (Number(currentDate.getFullYear()) - 1995)
   
    
    
})


function changeColorCard(newcolor){
    cardNumber.style.color = newcolor
    cardFullname.style.color = newcolor
    cardFullnameTxt.style.color = newcolor
    cardExpires.style.color = newcolor
    cardExpiresTxt.style.color = newcolor
    CVV.style.color = newcolor
}

let cardType = "none"
radioBlack.addEventListener("click", function(){
    if (radioBlack.checked) {
        radioPink.checked = false
        radioWhite.checked = false
        cardNew.style.backgroundColor = "black"
        changeColorCard("white")
        cardType = "Чорна карта"
        
    } else {
        
    }
})
radioPink.addEventListener("click", function(){
    if (radioPink.checked) {
        radioBlack.checked = false
        radioWhite.checked = false
        cardNew.style.backgroundColor = "#E1447D"
        changeColorCard("white")
        cardType = "Дитяча  карта"
    } else {
        
    }
})

radioWhite.addEventListener("click", function(){
    if (radioWhite.checked) {
        radioBlack.checked = false
        radioPink.checked = false
        cardNew.style.backgroundColor = "white"
        changeColorCard("black")
        cardType = "Біла  карта"
        
    }
})
let cardLogoInfo = ""

const logoCards = document.querySelectorAll('.box-company');
const cardLogo = document.querySelector('.company__card');
let statusLogo = false
logoCards.forEach((logoCard) => {
    logoCard.addEventListener("click", function() {
        logoCards.forEach((choose) => {
            choose.classList.remove("on");
            console.log(logoCard);
            statusLogo = true
            const selectedIndex = Array.from(logoCards).indexOf(logoCard);
            switch (selectedIndex) {
                case 0:
                    cardLogo.src = "../image/Mastercard Logo.png";
                    cardLogoInfo = "../image/Mastercard Logo.png"
                    cardLogo.style.height = "60px"
                    break;
                case 1:
                    cardLogo.src = "../image/VISA-logo.png";
                    cardLogoInfo = "../image/VISA-logo.png"
                    cardLogo.style.height = "75px"
                    break;
                case 2:
                    cardLogo.src = "../image/bitcoin.png";
                    cardLogoInfo = "../image/bitcoin.png"
                    ValutaInfo = "COIN"
                    cardLogo.style.height = "25px"
                    valutaCard[2].style.border = "0"
                    valutaCard[1].style.border = "0"
                    valutaCard[0].style.border = "0"
                    cardLogo.style.height = "35px"
                    break;
    
                default:
                    break;
            }

        });

        logoCard.classList.add("on");

    });
});



const colorChoose = document.querySelectorAll('.color-choose');

colorChoose.forEach((color, index) => {
    color.addEventListener("click", function() {
        cardNew.classList.add("color")
        switch (index) {
            case 0:
                cardNew.style.backgroundColor = "black"
                changeColorCard("white")
                break;
            case 1:
                cardNew.style.backgroundColor = "#838383"
                changeColorCard("black")
                break;
            case 2:
                cardNew.style.backgroundColor = "#E1447D"
                changeColorCard("white")
                break;
            case 3:
                cardNew.style.backgroundColor = "#0095FF"
                changeColorCard("white")
                break;
        }
    });
});

const imgChoose = document.querySelectorAll('.card--background');

imgChoose.forEach((img, index) => {
/*     console.log(img)
 */    img.addEventListener("click", function() {
        switch (index) {
            case 0:
                cardNew.classList.add("img")
                cardNew.style.background = "url('../image/background-card-1.png')";
                changeColorCard("white")
                break;
            case 1:
                    cardNew.classList.add("img")
                    cardNew.style.background = "url('../image/background-card-2.png')";
                    changeColorCard("white")
                    break;
            case 2:
                cardNew.classList.add("img")
                cardNew.style.background = "url('../image/background-card-3.png')";
                changeColorCard("white")
                break;
            case 3:
                cardNew.classList.add("img")
                cardNew.style.background = "url('../image/background-card-4.jpg')";
                changeColorCard("white")
                break;
        }
    });
});










const inputColor = document.querySelector('.input-color');


inputColor.addEventListener("input", () =>{
    cardNew.style.backgroundColor =  inputColor.value 
   
})


const inputImg = document.querySelector('.input-img');


inputImg.addEventListener("input", () =>{
    cardNew.style.backgroundColor =  inputImg.value 


})



    const changeColor = document.querySelector('.change-color');
    const changeColorBox = document.querySelector('.change-color-container');
    const changeImg = document.querySelector('.change-img');
    const changeImgBox = document.querySelector('.change-image-container');


    window.addEventListener("load", function(){
        changeColor.style.border = "2px solid blue"
        changeColorBox.classList.add("show")



    })

    changeColor.addEventListener("click", function(){

        changeColor.style.border = "2px solid blue"
        changeImg.style.border = "0"
        cardNew.style.backgroundColor = "black"
        changeImgBox.classList.remove("show")
        changeColorBox.classList.add("show")
        cardNew.classList.remove("img")
        cardNew.classList.add("color")
        
    })
    changeImg.addEventListener("click", function(){        
        changeColor.style.border = "0"
        changeImg.style.border = "2px solid blue"
        changeColorBox.classList.remove("show")
        changeImgBox.classList.add("show")
        cardNew.classList.remove("color")
        cardNew.classList.add("img")
        
    })

/* 

logoCard.addEventListener("click", function() {
        logoCard.classList.add("on");
 
}); */












const cardSecond = document.querySelector('.create__card-second');
const cardFirst = document.querySelector('.create__card-first');
const cardContinue = document.querySelector('.create-form-btn-continue');
const cardBack = document.querySelector('.back');
cardFirst.classList.add("show")


cardContinue.addEventListener("click", function(e){
    e.preventDefault()

    if (InputName.value.length > 3 &&
        InputSurname.value.length > 3 &&
        statusValuta == true &&
        statusLogo == true
        ){
            
            /* InputName.style.border="0px solid red"
            InputSurname.style.border="0px solid red" */
            cardFirst.classList.remove("show")
                cardSecond.classList.add("show")
    } else{
        /* InputName.style.border="2px solid red"
        InputSurname.style.border="2px solid red" */
        setTimeout(()=>{
            alert('Заповніть всі поля')

    }, 1000) 
     }
})
cardBack.addEventListener("click", function(){
    
    cardFirst.classList.add("show")
    cardSecond.classList.remove("show")
})



   

/* console.log(myCards)
 */



let myCards = JSON.parse(sessionStorage.getItem("myCards"));


balanceValue = "0.00";
let isRemoveCard = false
CreateBtn.addEventListener("click", function(){
    let InputNameValue = InputName.value
    let InputSurnameValue = InputSurname.value
    backgroundCard = cardNew.style.backgroundColor 
    backgroundImageInfo = cardNew.style.backgroundImage
    if(myCards != undefined){

        if(myCards.length >= 3){
            isRemoveCard = confirm("Ви не можете мати більше 3 карток.Ви можете їх видалити ви згідні?" )
        }
        if(isRemoveCard === true){
            myCards = []
        }
    } 
    card = {number: cardNumberInfo,
        expires: cardExpiresInfo, 
        background: backgroundCard,
        backgroundURL:  backgroundImageInfo,
        valuta: ValutaInfo, 
        company: cardLogoInfo,
        balance: balanceValue, 
        type: cardType }
       
    sessionStorage.setItem("inputname", InputNameValue)
    sessionStorage.setItem("inputsurname", InputSurnameValue)
    if(myCards == null){
        myCards = [card]
    }else{

        myCards.push(card)
    }
   
    
 console.log(card)
 sessionStorage.setItem("myCards",  JSON.stringify(myCards))
 /* sessionStorage.setItem("card", JSON.stringify(card)); */
 window.location.href = "../pages/myaccount.html" 

})






