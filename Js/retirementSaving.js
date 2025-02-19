function clearForm() {
    document.getElementById("calculatorForm").reset();
    document.getElementById("resultsContainer").style.display = "none";
}

function calculateRetirement() {
    const currentAge = parseFloat(document.getElementById("currentAge").value.replace(/,/g, ''));
    const retirementAge = parseFloat(document.getElementById("retirementAge").value.replace(/,/g, ''));
    const currentSavings = parseFloat(document.getElementById("currentSavings").value.replace(/,/g, ''));
    const annualDeposit = parseFloat(document.getElementById("annualDeposit").value.replace(/,/g, ''));
    const interestRate = parseFloat(document.getElementById("interestRate").value.replace(/,/g, ''));

    if (isNaN(currentAge) || isNaN(retirementAge) || isNaN(currentSavings) || isNaN(annualDeposit) || isNaN(interestRate)) {
        alert("Please enter valid numerical values for all fields.");
        return;
    }

    const yearsUntilRetirement = retirementAge - currentAge;
    const requiredSavingsPerYear = (currentSavings + annualDeposit * yearsUntilRetirement) / yearsUntilRetirement;
    const totalSavingsNeeded = (currentSavings + annualDeposit * yearsUntilRetirement) * (1 + interestRate / 100);

    document.getElementById("yearsUntilRetirement").innerText = yearsUntilRetirement;
    document.getElementById("requiredSavingsPerYear").innerText = requiredSavingsPerYear.toFixed(2).toLocaleString();
    document.getElementById("totalSavingsNeeded").innerText = totalSavingsNeeded.toFixed(2).toLocaleString();

    document.getElementById("resultsContainer").style.display = "block";
}

function formatInput(input) {
    const value = parseFloat(input.value.replace(/,/g, ''));

    if (isNaN(value)) {
        input.value = '0';
    } else {
        input.value = value.toLocaleString();
    }
}