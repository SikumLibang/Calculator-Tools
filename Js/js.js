function binaryCalc() {
    let fn = document.getElementById("fn").value.trim(); // Trim any leading or trailing whitespace
    let sn = document.getElementById("sn").value.trim();
    let opt = document.getElementById("opt").value;

    function isBinary(fn) {
        for (var i = 0; i < fn.length; i++) {
            if (fn[i] !== '0' && fn[i] !== '1') {
                return false;
            }
        }
        return true;
    }
    function isBinary(sn) {
        for (var i = 0; i < sn.length; i++) {
            if (sn[i] !== '0' && sn[i] !== '1') {
                return false;
            }
        }
        return true;
    }

    if (!isBinary(fn) || !isBinary(sn)) {
        alert("Error: Input should be binary numbers (containing only '0' and '1' characters).");
    } else {
        var num1 = parseInt(fn, 2);
        var num2 = parseInt(sn, 2);

        // Perform the binary operation
        var result;
        switch (opt) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    alert("Error: Division by zero!");
                    return;
                }
                break;
            case '%':
                result = num1 % num2;
                break;
            default:
                alert("Error: Invalid operator!");
                return;
        }

        // Convert the result to binary
        binResult = result.toString(2);

        document.getElementById("binaryAns").innerHTML = binResult;
        document.getElementById("decimalAns").innerHTML = result;
        document.getElementById("result").style.display = "flex";
    }
}

// Hexadecimal Operation
function hexCalc() {
    let fn = document.getElementById("fn").value.trim(); // Trim any leading or trailing whitespace
    let sn = document.getElementById("sn").value.trim();
    let opt = document.getElementById("opt").value;

    // Check if the inputs are valid hexadecimal numbers
    if (!/^[0-9A-Fa-f]+$/.test(fn) || !/^[0-9A-Fa-f]+$/.test(sn)) {
        alert("Error: Inputs are not valid hexadecimal numbers.")
        return;
    }

    // Convert hexadecimal numbers to decimal
    var decimal1 = parseInt(fn, 16);
    var decimal2 = parseInt(sn, 16);

    // Perform the operation based on the operator
    var result;
    switch (opt) {
        case '+':
            result = decimal1 + decimal2;
            break;
        case '-':
            result = decimal1 - decimal2;
            break;
        case '*':
            result = decimal1 * decimal2;
            break;
        case '/':
            if (decimal2 !== 0) {
                result = decimal1 / decimal2;
            } else {
                alert("Error: Division by zero!");
                return;
            }
            break;
        default:
            alert("Error: Invalid")
            return;
    }

    // Convert the result back to hexadecimal
    var hexResult = result.toString(16).toUpperCase();

    document.getElementById("binaryAns").innerHTML = hexResult;
    document.getElementById("decimalAns").innerHTML = result;
    document.getElementById("result").style.display = "flex";
}

//Binary to Decimal
function binaryToDecimal() {
    let fn = document.getElementById("bin_input").value.trim();
    function isBinary(fn) {
        for (var i = 0; i < fn.length; i++) {
            if (fn[i] !== '0' && fn[i] !== '1') {
                return false;
            }
        }
        return true;
    }

    if (!isBinary(fn)) {
        alert("Error: Input should be binary numbers (containing only '0' and '1' characters).");
    } else {
        var num1 = parseInt(fn, 2);
        document.getElementById("display").value = num1;
    }
}

//decimal to binary
function decimalToBinary() {
    // Get the decimal input value
    let decimalInput = parseInt(document.getElementById("din_input").value);

    // Check if the input is a valid number
    if (isNaN(decimalInput)) {
        alert("Please enter a valid decimal number.");
        return;
    }   

    // Convert decimal to binary
    let binaryOutput = decimalInput.toString(2);

    // Display the binary output
    document.getElementById("display-2").value = binaryOutput;
}

//Hexadecimal to Decimal
function hexadecimalToDecimal() {
    // Get the hexadecimal input value
    let hexadecimalInput = document.getElementById("bin_input").value.trim();

    // Check if the input is a valid hexadecimal number
    if (!/^[\da-fA-F]+$/.test(hexadecimalInput)) {
        alert("Please enter a valid hexadecimal number.");
        return;
    }

    // Convert hexadecimal to decimal
    let decimalOutput = parseInt(hexadecimalInput, 16);

    // Display the decimal output
    document.getElementById("display").value = decimalOutput;
}


//Decimal to Hexadecimal to Decimal
function decimalToHexadecimal() {
    // Get the decimal input value
    let decimalInput = parseInt(document.getElementById("deci_input").value);

    // Check if the input is a valid number
    if (isNaN(decimalInput)) {
        alert("Please enter a valid decimal number.");
        return;
    }

    // Convert decimal to hexadecimal
    let hexadecimalOutput = decimalInput.toString(16).toUpperCase();

    // Display the hexadecimal output
    document.getElementById("display-2").value = hexadecimalOutput;
}
