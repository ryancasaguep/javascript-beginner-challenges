const form = document.getElementById("form");
const inputBIll = document.getElementById("bill");
const inputTIp = document.getElementById("tip");
const inputPersons = document.getElementById("persons");
const outBill = document.getElementById("out-bill");
const outTip = document.getElementById("out-tip");
const outSplit = document.getElementById("out-split");
const outTotal = document.getElementById("out-total");
const alertText = document.getElementById("alert-text");

const alertUI = (message) =>{
    alertText.textContent = message; 
    alertText.classList.add("error-text");
    setTimeout(() => {
        alertText.textContent = ``;
        alertText.classList.remove("error-text");
    }, 3000);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
     if (inputBIll.value === "" || inputTIp.value === "" || inputPersons.value === ""){
        alertUI(`All fields are required!`);
        return;
    }

    const bill = Number(inputBIll.value);
    const tip = Number(inputTIp.value);
    const persons = Number(inputPersons.value);

    if(isNaN(bill) || isNaN(tip) || isNaN(persons) || bill <= 0 || persons <= 0){
        alertUI(`Please input a number!`);
        return;
    }

    const tipAmount = bill * (tip / 100);
    const totalBill = bill + tipAmount;
    const split = totalBill / persons;
    outBill.textContent = `PHP ${bill.toFixed(2)}`;
    outTip.textContent = `PHP ${tipAmount.toFixed(2)}`;
    outSplit.textContent = `PHP ${split.toFixed(2)}`;
    outTotal.textContent = `PHP ${totalBill.toFixed(2)}`;
    
})







