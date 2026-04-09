"use strict";

console.log("Hello world");

do {
    let inches = parseFloat(prompt("Subtotal must be be > 0 and < 10000"));

    if (inches == 999) break;

    if (Number.isNaN(inches)) {
        alert("Please enter a real number");
        continue;
    }

    const cm = (inches * 2.54).toFixed(2);

    document.write(`${inches} inches = ${cm} centimeters <br>`);

} while (true);

document.write(`<br><p style='text-indent:25px;'>Have a nice day!</p>`);