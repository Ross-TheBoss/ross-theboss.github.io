// Booking table live price calculations

document.addEventListener("DOMContentLoaded", () => {
    var childQuantityEl = document.getElementById("childTickets");
    var studentQuantityEl = document.getElementById("studentTickets");
    var adultQuantityEl = document.getElementById("adultTickets");

    childQuantityEl.onchange = recalculateTable;
    studentQuantityEl.onchange = recalculateTable;
    adultQuantityEl.onchange = recalculateTable;

    recalculateTable();
});

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