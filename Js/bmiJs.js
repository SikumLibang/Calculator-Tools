function calculateBMI() {
    let age = parseInt(document.getElementById("age").value);
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let resultTxt = document.getElementById("result-txt");
    let result = document.getElementById("bmi-ans");
    let ageOut = document.getElementById("out-age");
    let hei = document.getElementById("out-hei");
    let wei = document.getElementById("out-wei");

    const MAX_HEIGHT_CM = 300; // Maximum acceptable height in centimeters
    const MAX_WEIGHT_KG = 635; // Maximum acceptable weight in kilograms
    // Checking the user providing a proper value or not

    // Check if age is a positive integer and within a reasonable range
    if (age <= 0 || age < 1 || age > 150) {
        alert("Enter a valid age between 1 and 150!");
    } else if (height <= 0 || isNaN(height) || height > MAX_HEIGHT_CM) {
        alert("Enter a valid height!");
        resultTxt.innerHTML = "Provide a valid Height!";
    } else if (weight <= 0 || isNaN(weight) || weight > MAX_WEIGHT_KG) {
        alert("Enter a valid weight!");
        resultTxt.innerHTML = "Provide a valid Weight!";
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = bmi;
        ageOut.innerHTML = age;
        hei.innerHTML = height;
        wei.innerHTML = weight;

        // Dividing as per the bmi conditions
        if (bmi < 18.6) {
            resultTxt.innerHTML = `Time to grab a bite!`;
            document.getElementById("normal-wt").style.display = "none";
            document.getElementById("overweight-wt").style.display = "none";
            document.getElementById("obese-wt").style.display = "none";
            document.getElementById("underweight-wt").style.display = "flex";
        } else if (bmi >= 18.6 && bmi < 24.9) {
            resultTxt.innerHTML = `Great shape!!`;
            document.getElementById("underweight-wt").style.display = "none";
            document.getElementById("normal-wt").style.display = "flex";
            document.getElementById("overweight-wt").style.display = "none";
            document.getElementById("obese-wt").style.display = "none";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            resultTxt.innerHTML = `Time to run!`;
            document.getElementById("underweight-wt").style.display = "none";
            document.getElementById("normal-wt").style.display = "none";
            document.getElementById("overweight-wt").style.display = "flex";
            document.getElementById("obese-wt").style.display = "none";
        } else {
            resultTxt.innerHTML = `Time to run!`;
            document.getElementById("underweight-wt").style.display = "none";
            document.getElementById("normal-wt").style.display = "none";
            document.getElementById("overweight-wt").style.display = "none";
            document.getElementById("obese-wt").style.display = "flex";
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const male = document.querySelector('.male');
    const female = document.querySelector('.female');

    male.addEventListener('click', function () {
        male.classList.add('active');
        female.classList.remove('active');
    });

    female.addEventListener('click', function () {
        female.classList.add('active');
        male.classList.remove('active');
    });
});

function clearForm() {
    document.getElementById("bmi_form").reset();
}
