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

