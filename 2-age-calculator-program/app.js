const inputDate = document.getElementById("date");
const submitBtn = document.getElementById("submit");
const displayage = document.getElementById("display-age");

submitBtn.addEventListener("click", ()=> {
    if (inputDate.value === ""){
        displayage.style.color = "red";
        displayage.textContent = `Please select your birth date first!`;
    }else{
        const birthDate = new Date(inputDate.value);
        const currentDate = new Date();

        let age = currentDate.getFullYear() - birthDate.getFullYear();
        // displayage.textContent = `Your age is ${age} years old!`;

        if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())){
            age--;
        }
        displayage.style.color = "green";
        displayage.textContent = `Your age is ${age} years old!`;
    }
    
})


