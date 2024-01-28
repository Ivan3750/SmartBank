

const themeDark = document.querySelector('.theme-dark');
const themeLight = document.querySelector('.theme-light');
const themeChoose = document.querySelector('.theme-choose');
const userTel = document.querySelector('.tel__block-number');
const userEmail = document.querySelector('.email__block-number');
const userPassword = document.querySelector('.password__block-txt');

let userName = document.querySelector('.name__block-txt');

let InputName = sessionStorage.getItem("inputname");
let InputSurname = sessionStorage.getItem("inputsurname");







console.log(myCards)

userName.textContent = InputName + " " + InputSurname

if(userInfo != undefined){
    userTel.innerHTML = userInfo.PhoneNumber
    userEmail.innerHTML = userInfo.Email
    let HidePassword = ""
    for(p = userInfo.Password.length; p != 0; p--){
         HidePassword += "." 
    }
    userPassword.innerHTML = HidePassword

}



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
