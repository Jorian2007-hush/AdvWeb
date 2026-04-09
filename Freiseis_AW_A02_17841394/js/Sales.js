document.addEventListener("DOMContentLoaded", function () {

    const calculateBtn = document.getElementById("calculate");
    const clearBtn = document.getElementById("clear");

    calculateBtn.addEventListener("click", function () {

        let subTotal = parseFloat(document.getElementById("subtotal").value);
        let taxRate = parseFloat(document.getElementById("taxrate").value);

        if (isNaN(subTotal) || isNaN(taxRate)) {
            alert("Please enter valid numbers.");
            return;
        }

        if (subTotal <= 0 || subTotal >= 10000) {
            alert("Subtotal must be > 0 and < 10000.");
            return;
        }

        let salesTax = subTotal * (taxRate / 100);
        let total = subTotal + salesTax;

        document.getElementById("salestax").value = "$" + salesTax.toFixed(2);
        document.getElementById("total").value = "$" + total.toFixed(2);
    });

    clearBtn.addEventListener("click", function () {
        document.getElementById("subtotal").value = "";
        document.getElementById("taxrate").value = "";
        document.getElementById("salestax").value = "";
        document.getElementById("total").value = "";
    });

});