const form = document.querySelector("form");

form.addEventListener("submit" , (e) =>{
    e.preventDefault();

const height = parseInt(document.querySelector("#height").value)
const weight = parseInt(document.querySelector("#weight").value)
const heightError = document.querySelector(".heightError")
const weightError = document.querySelector(".weightError")
const result = document.querySelector("#result")

if (height == "" || height < 0 || isNaN(height)) {
    heightError.innerHTML = `Please enter a valid height : ${height}`   
}

if (weight == "" || weight < 0 || isNaN(weight)) {
    weightError.textContent = `Please enter a valid weight : ${weight}`
}

const bmi = (weight / ((height * height) /10000)).toFixed(2)

if (bmi < 18.6) {
    result.textContent = `Underweight: ${bmi}`;
} else if (bmi >= 18.6 && bmi <= 24.9) {
    result.textContent = `Normal Range: ${bmi}`;
} else {
    result.textContent = `Overweight: ${bmi}`;
}
});