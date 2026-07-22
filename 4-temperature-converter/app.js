const form = document.getElementById("form");
const inputDegrees = document.getElementById("degrees");
const inputTemp = document.getElementById("temp");
const outResult = document.getElementById("out-result");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    if (inputDegrees.value === "" || inputTemp.value === ""){
        console.log("empty");
        return;
    }

    const degrees = Number(inputDegrees.value);
    const temp = inputTemp.value;
    if (isNaN(degrees)){
        console.log("Invalid input numbers!")
        return;
    }

    if (temp !== "celsius" && temp !== "fahrenheit"){
        console.log("Invalid temperature unit!")
        return;
    }

    if (temp === "celsius"){
        const fahrenheit = (degrees * 9 / 5) + 32;
        outResult.textContent = `${fahrenheit.toFixed(2)} °F`;
        return;
    }

    if (temp === "fahrenheit"){
        const celsius = (degrees - 32) * 5 / 9;
        outResult.textContent = `${celsius.toFixed(2)} °C`;
        return;
    }

})
