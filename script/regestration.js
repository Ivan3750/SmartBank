const btnSumbit = document.querySelector('.regestration__button');
const userName = document.querySelector('.regestation__username');
const email = document.querySelector('.regestation__email');
const password = document.querySelector('.regestation__password');
const tel = document.querySelector('.regestation__tel');
const modalError = document.querySelector('.modal');
const problemText = document.querySelector('.problem');
const modalImage = document.querySelector('.modal-img');





btnSumbit.addEventListener('click', function (event) {
    event.preventDefault()
    console.log("Work")
    if (!UserNameCheck()) {
        displayError("Ведіть коректний нікнейм","../image/user.png", false)
        return
    } else if (!EmailCheck()) {
        displayError("Ведіть коректну пошту","../image/email.png", false)
        return
    } else if(!telCheck()) {
        displayError("Ведіть коректний номер","../image/call.png", false)
    }else if(!passwordCheck()){
        displayError("Пароль ненадійний","../image/password.png", false)

    }
    else {
        displayError("","", true)
        window.location.href = "../Html/card.html" 
    }
        UserNameCheck()
        EmailCheck()
        telCheck()
        passwordCheck()
        
       
    
})


function displayError(DisplayText,DisplayImg,isCheck){
    if (isCheck === false) {
        problemText.innerHTML = DisplayText
        modalImage.src = DisplayImg
        modalError.classList.add("show");
        setTimeout(function(){
            modalError.classList.remove("show");

        },2000)
        return;
    }else{
        modalError.classList.remove("show");
        return;
    }
    
}




function UserNameCheck(){
    if (userName.value.length < 4 || userName.value[0] != userName.value[0].toLocaleUpperCase() ) {
        userName.style.border = "3px solid #f00"
        displayError("Ведіть коректний нікнейм","../image/user.png", false)
        return false;
        
    } else {
        displayError("","", true)
        userName.style.border = "0"
        return true;
    }
}

userName.addEventListener("change", function(){
    UserNameCheck()
})

function EmailCheck(){
    if (email.value.length < 10 || !email.value.includes("@") || !email.value.includes(".")) {
        email.style.border = "3px solid #f00"
        displayError("Ведіть коректну пошту","../image/email.png", false)
        return false;
        
    } else { 
        displayError("","", true)
        email.style.border = "0"
        return true;
    }
}
email.addEventListener("change", function(){
    EmailCheck()
})
function passwordCheck(){
    const passwordCheck = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
    
    if (!passwordCheck.test(password.value)) {
        password.style.border = "3px solid #f00"
        displayError("Пароль ненадійний","../image/password.png", false)
        return false;
    } else {
        password.style.border = "0"
        displayError("","", true)
        return true;
    }
    
}

password.addEventListener("change", function(){
    passwordCheck()
})

function telCheck(){
    if (tel.value.length != 13  || !tel.value.includes(+380)) {
        tel.style.border = "3px solid #f00"
        displayError("Ведіть коректний номер","../image/call.png", false)

       
        return false;
    } else {
        displayError("","", true)
        tel.style.border = "0"
        return true;
    }

}

tel.addEventListener("change", function(){
    telCheck()
})




