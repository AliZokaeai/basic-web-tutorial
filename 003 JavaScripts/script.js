const myChackBox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");



mySubmit.onclick = function(){
    if(myChackBox.checked){
        subResult.textContent = `You are subscribed!`;
    }else{
        subResult.innerHTML = `You are<span style='color:red;'> not </span> subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are payin with Visa.`;
    }else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard.`;
    }else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal.`;
    }else{
        paymentResult.innerHTML =`You <span style='color:red;font-weight:bold;'>must </span>select a payment type.`
    }
}