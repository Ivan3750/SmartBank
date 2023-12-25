let mediaScreen = window.matchMedia("(max-width: 700px)")
const logoMain = document.querySelector('.logo');
/* STYLE */

function Screen(){
    if (mediaScreen.matches) {
        logoMain.src = "./image/favicon.png" 
    } else {
        logoMain.src = "./image/logo.png" 

    }
}

mediaScreen.addEventListener("change", function(){
    Screen()
    
    
})
Screen()




/* const cardsBtn = document.querySelector('.cards');
const modalCard = document.querySelector('.modal__cards');
const modalClose = document.querySelector('.modal-btn');
const body = document.querySelector('.body');

cardsBtn.addEventListener("click", function(event){
    event.preventDefault()
    modalCard.classList.add("show")
    body.style.overflow = "hidden"
    
})


modalClose.addEventListener("click", function(event){
    event.preventDefault()
    
    modalCard.classList.remove("show")
    body.style.overflow = "visible"


}) */




const firstDato = new Date('2023-12-20T18:32:00')

const dashboardNumber = document.querySelectorAll(".dashboard__box-number")
let usersDashboard = 8244750
let purchasesDashboard = 7648540329
let spentDashboard = 4573671358867
let cashbackDashboard = 7340954378
let onlineNumber = 0;
let todayDato = new Date();
let infoDato = Math.floor((todayDato - firstDato)/1000) 
onlineNumber = Math.floor((infoDato / 500)) 
dashboardNumber[0].innerHTML = usersDashboard + onlineNumber

console.log(dashboardNumber)

function NumberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }


CheckUserDashboard()
CheckpurchasesDashboard()
 CheckCashbackDashboard()
 CheckspentDashboard()

function CheckTime(coefficient, dashboard, dashboardNum, datoTime){ 
    todayDato = new Date(); 
    infoDato = Math.floor((todayDato - firstDato)/datoTime) 
    onlineNumber = Math.floor((infoDato / coefficient)) 
    visInfo = dashboard + onlineNumber 

    dashboardNum.innerHTML = NumberWithSpaces(visInfo )
    return onlineNumber;


}

    
function CheckUserDashboard(){
    CheckTime(500, usersDashboard, dashboardNumber[0], 1000)
    setTimeout(CheckUserDashboard, 1000)



}
function CheckpurchasesDashboard(){
    CheckTime(1, purchasesDashboard, dashboardNumber[1], 1)
    setTimeout(CheckpurchasesDashboard,0.0001)  
    
}
function CheckspentDashboard(){
    CheckTime(0.1, spentDashboard, dashboardNumber[2], 1)
    setTimeout(CheckspentDashboard,0.0001)  
    
}
function CheckCashbackDashboard(){
    CheckTime(1, cashbackDashboard, dashboardNumber[3], 10)
    setTimeout(CheckCashbackDashboard,0.0001)  

}

/* function CheckUserDashboard(){
    let infoDato = Math.floor((todayDato - firstDato)/1000) 
    console.log(infoDato)
    console.log(onlineNumber)
    onlineNumber = Math.floor((infoDato / 500)) - onlineNumber
    console.log(infoDato)
    setTimeout(CheckTime, 1000)
    if(infoDato % 500 == 0){
        dashboardNumber[0].innerHTML = usersDashboard + onlineNumber
        console.log(10)
    }
} */
/* function CheckUserDashboard(){
    todayDato = new Date();
    let infoDato = Math.floor((todayDato - firstDato)/1000) 
    console.log(infoDato)
    console.log(onlineNumber)
    onlineNumber = Math.floor((infoDato / 100)) - onlineNumber
    console.log(infoDato)
    setTimeout(CheckUserDashboard, 100)
        dashboardNumber[1].innerHTML = purchasesDashboard + onlineNumber

        console.log(10)
    
} */

const dashboardBox = document.querySelectorAll(".dashboard__box");
const preferenceBox = document.querySelectorAll(".preference__box");
const newCard = document.querySelector(".newcard");
const supportBox = document.querySelector(".support__section");
window.addEventListener("scroll",  () =>{

if(this.scrollY > 600){
    dashboardBox.forEach((box) => {
        box.classList.add("on");
    });
}
if(this.scrollY > 1300){
    preferenceBox.forEach((box) => {
        box.classList.add("on");
    });

}
if(this.scrollY > 2200){
    newCard.classList.add("on");
    

}
if(this.scrollY > 2900){
    supportBox.classList.add("on");
    

}
} )


const cardsBox = document.querySelector('.info__cards');

