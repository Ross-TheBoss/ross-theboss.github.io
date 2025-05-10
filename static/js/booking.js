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
    Payment.formatCardNumber(inputCardNumberEl, 16);

    let inputSecurityCode = document.getElementById("inputSecurityCode");
    Payment.formatCardCVC(inputSecurityCode);

    const today = new Date();

    let inputExpiryDateEl = document.getElementById("inputExpiryDate");
    Payment.formatCardExpiry(inputExpiryDateEl);
    $("#inputExpiryDate").datepicker({
        format: "mm / yy", 
        minViewMode: 1, 
        maxViewMode: 2,
        startView: 1,
        assumeNearbyYear: true,
    });

    // Payment form submission
    document.forms.namedItem("payment").onsubmit = (event) => {
        event.preventDefault();
        
        document.location = 'events/bonfire-night-2025/booking-complete';
    }
});

let recalculateTable = () => {
    let childPrice = Number.parseFloat(document.getElementById("childPrice").textContent);
    let studentPrice = Number.parseFloat(document.getElementById("studentPrice").textContent);
    let adultPrice = Number.parseFloat(document.getElementById("adultPrice").textContent);

    let childQuantity = Number.parseFloat(document.getElementById("childTickets").value);
    let studentQuantity = Number.parseFloat(document.getElementById("studentTickets").value);
    let adultQuantity = Number.parseFloat(document.getElementById("adultTickets").value);

    // Calculate sub-totals.
    let childSubtotalEl = document.getElementById("childSubtotal");
    let childSubtotal = (childPrice * childQuantity);
    childSubtotalEl.textContent = childSubtotal.toFixed(2).toString();

    let studentSubtotalEl = document.getElementById("studentSubtotal");
    let studentSubtotal = (studentPrice * studentQuantity);
    studentSubtotalEl.textContent = studentSubtotal.toFixed(2).toString();

    let adultSubtotalEl = document.getElementById("adultSubtotal");
    let adultSubtotal = (adultPrice * adultQuantity);
    adultSubtotalEl.textContent = adultSubtotal.toFixed(2).toString();

    // Calculate grand total
    let totalEl = document.getElementById("total");
    let total = childSubtotal + studentSubtotal + adultSubtotal;
    totalEl.textContent = total.toFixed(2).toString();
}