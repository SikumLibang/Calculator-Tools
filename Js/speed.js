function convertSpeed() {
    let speedInput = parseFloat(document.getElementById("speed_input").value);
    let fromUnit = document.getElementById("from_unit").value;
    let toUnit = document.getElementById("to_unit").value;
    let resultElement = document.getElementById("speed_output");

    if (isNaN(speedInput) || speedInput <= 0) {
        alert("Please enter a valid positive number for speed.");
    } else if (fromUnit === "kmh" && toUnit === "mph") {
        resultElement.value = speedInput * 0.621371;
    } else if (fromUnit === "mph" && toUnit === "kmh") {
        resultElement.value = speedInput * 1.60934;
    } else {
        // Handle the case where fromUnit and toUnit are the same
        resultElement.value = speedInput;
    }
}
