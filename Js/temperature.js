function convertTemperature() {
    // Get the input, output elements, and units selection
    var inputElement = document.getElementById('temperature_input');
    var outputElement = document.getElementById('temperature_output');
    var fromUnit = document.getElementById('from_unit').value;
    var toUnit = document.getElementById('to_unit').value;

    // Get the temperature value to convert
    var temperature = parseFloat(inputElement.value);

    // Check if the input is a valid number
    if (isNaN(temperature)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    // Perform the conversion
    var convertedTemperature;
    if (fromUnit === 'c' && toUnit === 'f') {
        convertedTemperature = (temperature * 9/5) + 32;
    } else if (fromUnit === 'f' && toUnit === 'c') {
        convertedTemperature = (temperature - 32) * 5/9;
    } else {
        // Conversion is not needed, just set the same temperature
        convertedTemperature = temperature;
    }

    // Update the output element with the converted temperature
    outputElement.value = convertedTemperature.toFixed(2);
}
