function convertLength() {
    let lengthInput = parseFloat(document.getElementById("length_input").value);
    let fromUnit = document.getElementById("from_unit").value;
    let toUnit = document.getElementById("to_unit").value;
    let resultElement = document.getElementById("result-con");
    // Check if lengthInput is a valid positive number
    if (isNaN(lengthInput) || lengthInput <= 0) {
        alert("Please enter a valid positive number for length.");
        return;
    }

    let result;

    // Convert length based on selected units
    switch (fromUnit) {
        case "mm":
            result = lengthInput / 10; // Convert to cm
            break;
        case "cm":
            result = lengthInput; // No conversion needed
            break;
        case "m":
            result = lengthInput * 100; // Convert to cm
            break;
        case "km":
            result = lengthInput * 100000; // Convert to cm
            break;
        case "mi":
            result = lengthInput * 160934; // Convert to cm
            break;
        case "ft":
            result = lengthInput * 30.48; // Convert to cm
            break;
        case "in":
            result = lengthInput * 2.54; // Convert to cm
            break;
        case "yd":
            result = lengthInput * 91.44; // Convert to cm
            break;
        default:
            alert("Invalid unit selected.");
            return;
    }

    // Convert the result to the desired unit
    switch (toUnit) {
        case "mm":
            result = result * 10; // Convert from cm to mm
            break;
        case "cm":
            // No conversion needed
            break;
        case "m":
            result = result / 100; // Convert from cm to m
            break;
        case "km":
            result = result / 100000; // Convert from cm to km
            break;
        case "mi":
            result = result / 160934; // Convert from cm to mi
            break;
        case "ft":
            result = result / 30.48; // Convert from cm to ft
            break;
        case "in":
            result = result / 2.54; // Convert from cm to in
            break;
        case "yd":
            result = result / 91.44; // Convert from cm to yd
            break;
        default:
            alert("Invalid unit selected.");
            return;
    }

    // Update the result element with the converted length
    resultElement.value = result.toFixed(2); // Round to 2 decimal places
}
