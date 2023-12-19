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





valutaCard[0].addEventListener("click", function(){
    valutaCard[0].style.border = "2px solid blue"
    valutaCard[1].style.border = "0"
    valutaCard[2].style.border = "0"
    
})

valutaCard[1].addEventListener("click", function(){
    valutaCard[1].style.border = "2px solid blue"
    valutaCard[0].style.border = "0"
    valutaCard[2].style.border = "0"
    
})

valutaCard[2].addEventListener("click", function(){
    valutaCard[2].style.border = "2px solid blue"
    valutaCard[1].style.border = "0"
    valutaCard[0].style.border = "0"
    
})


CreateBtn.addEventListener("click", function(event){
    event.preventDefault()
        let min = 1000;
        let max = 9999;
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        let randomtoNum = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
        let randCVV = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        cardNumber.innerHTML = `3750 87${randomtoNum} ${randomNum} ${randomNum}`
        const currentDate = new Date();
        CVV.innerHTML = randCVV
        cardExpiresTxt.innerHTML = currentDate.getMonth() + 1 + "/" + (Number(currentDate.getFullYear()) - 1995)
        if (InputName.value.length === 0 && InputSurname.value.length === 0 ) {
            cardName.innerHTML = "Smart Bank"
        }else{

        }
   
    
    
})

radioBlack.addEventListener("click", function(){
    if (radioBlack.checked) {
        radioPink.checked = false
        radioWhite.checked = false
        cardNew.style.backgroundColor = "black"
        cardNumber.style.color = "white"
        cardFullname.style.color = "white"
        cardFullnameTxt.style.color = "white"
        cardExpires.style.color = "white"
        cardExpiresTxt.style.color = "white"
        CVV.style.color = "white"
    } else {
        
    }
})
radioPink.addEventListener("click", function(){
    if (radioPink.checked) {
        radioBlack.checked = false
        radioWhite.checked = false
        cardNew.style.backgroundColor = "#E1447D"
        cardNumber.style.color = "white"
        cardFullname.style.color = "white"
        cardFullnameTxt.style.color = "white"
        cardExpires.style.color = "white"
        cardExpiresTxt.style.color = "white"
        CVV.style.color = "white"
    } else {
        
    }
})

radioWhite.addEventListener("click", function(){
    if (radioWhite.checked) {
        radioBlack.checked = false
        radioPink.checked = false
        cardNew.style.backgroundColor = "white"
        cardNumber.style.color = "black"
        cardFullname.style.color = "black"
        cardFullnameTxt.style.color = "black"
        cardExpires.style.color = "black"
        cardExpiresTxt.style.color = "black"
        CVV.style.color = "black"
    } else {
        
    }
})