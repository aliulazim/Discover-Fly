
function handleTicketChange(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    let ticketPrice = 0;
    if (ticket == 'first-class') {
        ticketPrice = ticketNewCount * 150;
    }
    if (ticket == 'economy-class') {
        ticketPrice = ticketNewCount * 100;
    }
    document.getElementById(ticket + "-price").innerText = '($' + ticketPrice + ')';
    // calculate function call
    calculateTotal()
}

function calculateTotal() {
    const firstClassCount = getInputValue('first-class');
    const economyClassCount = getInputValue('economy-class');

    const totalCost = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById("subtotal").innerText ='$' + totalCost;

    // 10% vat
    const vat = Math.round(totalCost / 10);
    document.getElementById("vat-amount").innerText = '$' + vat;

    // Grand total
    const grandTotal = totalCost + vat;
    document.getElementById("total").innerText = '$' + grandTotal;
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}











/*
// First class ticket

function handleFirstClassTicket(isIncrease) {
    const ticketInput = document.getElementById("first-class-count");
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    const ticketPrice = ticketNewCount * 150;
    document.getElementById("first-class-price").innerText = '($' + ticketPrice + ')';
}

// Economy class ticket

function handleEconomyClassTicket(isIncrease) {
    const economyTicketInput = document.getElementById("economy-class-count");
    const economyTicketCount = parseInt(economyTicketInput.value);
    let economyTicketNewCount = economyTicketCount;
    if (isIncrease == true) {
        economyTicketNewCount = economyTicketCount + 1;
    }
    if (isIncrease == false && economyTicketCount > 0) {
        economyTicketNewCount = economyTicketCount - 1;
    }
    economyTicketInput.value = economyTicketNewCount;
    const economyTicketPrice = economyTicketNewCount * 100;
    document.getElementById("economy-class-price").innerText = '($' + economyTicketPrice + ')';
}

*/
