function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let heightUnit = document.querySelector('input[name="heightUnit"]:checked').value;
    let weightUnit = document.querySelector('input[name="weightUnit"]:checked').value;
    
    if (heightUnit === "cm") height /= 100;
    if (heightUnit === "ft") height *= 0.3048;
    
    if (weightUnit === "lbs") weight *= 0.453592;
    
    if (weight > 0 && height > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        document.getElementById("result").innerText = "Your BMI is: " + bmi;
        
        let category = "";
        let color = "";
        if (bmi < 18.5) {
            category = "Underweight";
            color = "#ffc107";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal Weight";
            color = "#28a745";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
            color = "#fd7e14";
        } else {
            category = "Obese";
            color = "#dc3545";
        }
        
        let bmiCategory = document.getElementById("bmi-category");
        bmiCategory.innerText = category;
        bmiCategory.style.backgroundColor = color;
        bmiCategory.style.display = "block";
    } else {
        document.getElementById("result").innerText = "Please enter valid values";
        document.getElementById("bmi-category").style.display = "none";
    }
}