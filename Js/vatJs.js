function totalAmountWithVAT() {
  let netAmount = parseFloat(document.getElementById("vat-amount1").value.replace(/,/g, ''));
  let vatRate = parseFloat(document.getElementById("vat-percent1").value);

  // Calculate the VAT amount
  vatAmount = netAmount * (vatRate / 100);

  // Calculate the total amount including VAT
  let totalAmount = netAmount + vatAmount;

  // Round to two decimal places
  totalAmount = Math.round(totalAmount * 100) / 100;

  document.getElementById("display").value = '$' + totalAmount;
}

function amountWithoutVat() {
  let netAmount = parseFloat(document.getElementById("vat-amount2").value.replace(/,/g, ''));
  let vatRate = parseFloat(document.getElementById("vat-percent2").value);

  // Calculate the VAT amount
  vatAmount = netAmount * (vatRate / 100);

  // Calculate the total amount including VAT
  let totalAmount = netAmount - vatAmount;

  // Round to two decimal places
  totalAmount = Math.round(totalAmount * 100) / 100;

  document.getElementById("display2").value = '$' + totalAmount;
}

function formatInput(input) {
  const value = parseFloat(input.value.replace(/,/g, ''));

  if (isNaN(value)) {
    input.value = '0';
  } else {
    input.value = value.toLocaleString();
  }
}