const btnSumbit = document.querySelector('.regestration__button');
btnSumbit.addEventListener('click', function (event) {
    event.preventDefault()
    const userName = document.querySelector('regestation__username');
    const email = document.querySelector('regestation__email');
    const password = document.querySelector('regestation__password');
    const tel = document.querySelector('regestation__tel');
    if (/* userName.value.toUpperCase() &&  */userName.value.length > 0) {
        userName.style.backgroundColor = "grey"
    } else {
        userName.value.style.backgroundColors = "red"
        
    }
})