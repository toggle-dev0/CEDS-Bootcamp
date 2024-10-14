// Grab the elements from the HTML page needed for the BMI calculator
const weightInput = document.querySelector(".weight-field");
const heightInput = document.querySelector(".height-field");
const bmiBtn = document.querySelector(".get-bmi-btn");
const result = document.querySelector(".bmi-result");
const bmiMessage = document.querySelector(".bmi-message");
const bmiContainer = document.querySelector(".bmi-output-container");
const hideBtn = document.querySelector(".hide-btn");
let bmi = 0

// Computation to get the BMI value
bmiBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let weight = Number(weightInput.value)
    let height = Number(heightInput.value)

    // Validation for proper inputs
    if (typeof weight === "number" && typeof height === "number") {
        if (height !== 0 && weight !== 0) {
            bmi = (weight / (height / 100) ** 2).toFixed(2);
            result.textContent = `BMI is ${bmi}`
        } else if (weight === 0) {
            result.textContent = "Weight must be greater than 0"
        }
        else {
            result.textContent = "Height must be greater than 0"
        }
    } else {
        result.textContent = "Please enter valid numbers"
    }

    // Expected Outcomes: Underweight (< 18.5), Normal (18.5 - 24.9), Overweight (25 - 29.9), Obesity (30+)
    if (bmi >= 30) {
        bmiMessage.textContent = "You are Obese"
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiMessage.textContent = "You are Overweight"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiMessage.textContent = "You have a Normal/Healthy Weight"
    } else {
        bmiMessage.textContent = "You are Underweight"
    }

    bmiContainer.style.display = "block"
})

hideBtn.addEventListener("click", () => bmiContainer.style.display = "none")