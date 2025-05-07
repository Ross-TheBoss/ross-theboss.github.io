// Booking table live price calculations

document.addEventListener("DOMContentLoaded", () => {
    // Table of prices
    var childQuantityEl = document.getElementById("childTickets");
    var studentQuantityEl = document.getElementById("studentTickets");
    var adultQuantityEl = document.getElementById("adultTickets");

    childQuantityEl.onchange = recalculateTable;
    studentQuantityEl.onchange = recalculateTable;
    adultQuantityEl.onchange = recalculateTable;

    recalculateTable();

    // Payment Details

    let inputCardNumberEl = document.getElementById("inputCardNumber");
    inputCardNumberEl.oninput = function() {
        let newValue = this.value.replace(/[^0-9]+/g, '');
        this.value = [0, 4, 8, 12]
            .map((n) => newValue.substring(n, n+4))
            .filter((group) => group != '')
            .join(' ');
    }

    inputCardNumberEl.onkeydown = checkCardNumberInput;

    let inputSecurityCode = document.getElementById("inputSecurityCode");
    inputSecurityCode.onkeydown = checkDigit;

    let inputExpiryDateEl = document.getElementById("inputExpiryDate");
    inputExpiryDateEl.onkeydown = checkMonthYearInput;

    inputExpiryDateEl.oninput = function() {
        let newValue = this.value.replace(/[^0-9]+/g, '');
        this.value = [0, 2]
            .map((n) => newValue.substring(n, n+2))
            .filter((group) => group != '')
            .join('/');
    }

    // Payment form submission

    document.forms.namedItem("payment").onsubmit = (event) => {
        event.preventDefault();
        
        document.location = 'events/bonfire-night-2025/booking-complete';
    }
});

let checkMonthYearInput = function (event) {
    if (checkDigit(event)){
        if (event.key.match(/[0-9]/)){
            const index = this.selectionStart;
            if (index == 0){
                return event.key.match(/[0-1]/) != null;
            } else if (index == 1 && this.value[0] == "1"){
                return event.key.match(/[0-2]/) != null;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

let checkCardNumberInput = (event) => {
    const key = event.keyCode;

    if (key == 37){ // Left arrow key
        // Move in the same way as if a digit had been added.
        if (event.target.selectionStart != 1 && event.target.selectionStart % 5 == 1){
            const newSelectionStart = event.target.selectionStart - 2;
            event.target.selectionStart = newSelectionStart;
        }

        return true;
    } else if (key == 39){ // Right arrow key
        if (event.target.selectionStart % 5 == 4){
            const newSelectionStart = event.target.selectionStart + 1;
            event.target.selectionStart = newSelectionStart;
        }

        return true;
    }

    return checkDigit(event);
}

let checkDigit = (event) => {
    const key = event.keyCode;
    
    return ((key >= 48 && key <= 57)) || // Digits
           ((key >= 96 && key <= 105)) || // Numpad digits
           ((key == 37) || (key == 39)) || // Left and Right arrows
           (key == 8) || // Backspace key
           (key == 9) || // Tab key
           (event.ctrlKey||event.metaKey); // Ctrl or Meta Modifier Key
}

let recalculateTable = () => {
    let childPrice = Number.parseFloat(document.getElementById("childPrice").textContent);
    let studentPrice = Number.parseFloat(document.getElementById("studentPrice").textContent);
    let adultPrice = Number.parseFloat(document.getElementById("adultPrice").textContent);

    let childQuantity = Number.parseFloat(document.getElementById("childTickets").value);
    let studentQuantity = Number.parseFloat(document.getElementById("studentTickets").value);
    let adultQuantity = Number.parseFloat(document.getElementById("adultTickets").value);

    let childSubtotalEl = document.getElementById("childSubtotal");
    let childSubtotal = (childPrice * childQuantity);
    childSubtotalEl.textContent = childSubtotal.toFixed(2).toString();

    let studentSubtotalEl = document.getElementById("studentSubtotal");
    let studentSubtotal = (studentPrice * studentQuantity);
    studentSubtotalEl.textContent = studentSubtotal.toFixed(2).toString();

    let adultSubtotalEl = document.getElementById("adultSubtotal");
    let adultSubtotal = (adultPrice * adultQuantity);
    adultSubtotalEl.textContent = adultSubtotal.toFixed(2).toString();

    let totalEl = document.getElementById("total");
    let total = childSubtotal + studentSubtotal + adultSubtotal;
    totalEl.textContent = total.toFixed(2).toString();
}