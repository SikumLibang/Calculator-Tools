function CalculateEMI() {

    // Extracting value in the amount 
    // section in the variable
    const amount = parseFloat(document.getElementById("amount").value.replace(/,/g, ''));

    // Extracting value in the interest
    // rate section in the variable
    const rate = parseFloat(document.getElementById("rate").value.replace(/,/g, ''));

    // Extracting value in the months 
    // section in the variable
    const months = parseInt(document.getElementById("months").value.replace(/,/g, ''));

    // Calculating interest per month
    const interest = (amount * (rate * 0.01)) / months;

    // Calculating total payment
    const total = ((amount / months) + interest).toFixed(2);
    document.getElementById("totalEMI").value = '$ '+total;
}

function formatInput(input) {
    const value = parseFloat(input.value.replace(/,/g, ''));

    if (isNaN(value)) {
        input.value = '0';
    } else {
        input.value = value.toLocaleString();
    }
}
function clearForm() {
    document.getElementById("calculatorForm").reset();
}