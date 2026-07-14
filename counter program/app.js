const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const count = document.getElementById("count");
let actualCount = 0;

const updateUI = () =>{
    count.textContent = actualCount;
    if (actualCount === 0){
        count.style.color = "#000";
    }else{
        count.style.color = "green";
    }
}

decrease.addEventListener("click", () =>{
    if (actualCount>0){
        actualCount --; 
    }
    updateUI();
})

reset.addEventListener("click", () =>{
    actualCount = 0;
    updateUI();
})

increase.addEventListener("click", () =>{
    actualCount ++;
    updateUI();
})
