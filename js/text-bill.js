// get a reference to the textbox where the bill type is to be entered
var billTypeTextElement = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtnElement = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
var billTypeEnteredElement = document.querySelector(".billTypeEntered");
var callsTotalElem = document.querySelector(".callTotalOne" );
var smsTotalElem = document.querySelector(".smsTotalOne" );
var totalCostEleme = document.querySelector(".totalOne");
var textTotalAddBtnElement = document.querySelector(".textTotalAddBtn");
//add an event listener for when e add button is pressed
var callsTotal = 0;
var smsTotal = 0;

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElement.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }

    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostEleme.innerHTML = totalCost.toFixed(2);

    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostEleme.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostEleme.classList.add("warning");
    }
};

addToBillBtnElement.addEventListener('click', textBillTotal);
