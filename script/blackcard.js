const summaRange = document.querySelector('.calc-summa-range');
const timeRange = document.querySelector('.calc-time-range');
const summaNumber = document.querySelector('.calc-summa-number');
const timeNumber = document.querySelector('.calc-time-number');
const spentMoneyNum = document.querySelector('.credit-info-number');
const minMoneyNum = document.querySelector('.credit-minimum-number');
const firstDato = document.querySelector('.credit-first-dato');
const creditNum = document.querySelector('.credit-all-number');
const creditProcent = document.querySelector('.credit-procent-number');
const creditFree = document.querySelector('.credit-free-number');
let summaArray = ["10 000", "20 000", "50 000", "80 000", "100 000", "150 000", "200 000", "300 000", "400 000", "500 000"]
let timeArray = ["3 місяці", "6 місяців", "9 місяців", "12 місяців", "18 місяців", "24 місяці", "36 місяців"]
console.log(summaRange.value)
summaRangeShow(1)
function summaRangeShow(arrayNum){

    summaNumber.innerHTML = summaArray[arrayNum-1]
    console.log(parseInt(summaArray[arrayNum-1].replace(/\s/g, ""), 10));
    minMoneyNum.innerHTML = (parseInt(summaArray[arrayNum-1].replace(/\s/g, ""), 10))/25 + "₴"
}

summaRange.addEventListener("input", () => {
    summaRangeShow(parseInt(summaRange.value, 10))
})
function timeRangeShow(arrayNum){

    timeNumber.innerHTML = timeArray[arrayNum-1]
}

timeRange.addEventListener("input", () => {
    timeRangeShow(parseInt(timeRange.value, 10))
})

