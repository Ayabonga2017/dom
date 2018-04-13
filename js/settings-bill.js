var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
//get a reference to the add button
var settingsBillAddBtn = document.querySelector(".settingsBillAddBtn");
var updateSettings = document.querySelector(".updateSettings");
//create a variable that will keep track of the total bill

var callTotalSettings = document.querySelector(".callTotalSettings" );
var smsTotalSettings = document.querySelector(".smsTotalSettings" );
var totalSettings = document.querySelector(".totalSettings");

var smsCostSetting = document.querySelector(".smsCostSetting");
var callCostSetting = document.querySelector(".callCostSetting");
var warningLevelSetting= document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");

//add an event listener for when e add button is pressed

var callsTotal = 0.00;
var smsTotal = 0.00;
var totalCost = 0.00;

var smsCost = 0.0;
var callCost = 1.50;
var warningLevel = 40.00;
var criticalLevel = 70.00;


updateSettings.addEventListener('click', update);

function update(){
smsCost =  parseFloat(smsCostSetting.value);
callCost =  parseFloat(callCostSetting.value);
warningLevel =  parseFloat(warningLevelSetting.value);
criticalLevel =  parseFloat(criticalLevelSetting.value);
console.log(callCost);
};
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function totalSetting(){
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
      // billItemType will be 'call' or 'sms'
  }if (totalCost >=criticalLevel) {

  } else {
    if (billItemType === "call"){
        callsTotal += callCost;
      console.log(callCost);
    }
    else if (billItemType === "sms"){
        smsTotal += smsCost;
    }
    totalCost = callsTotal + smsTotal;
  }
    // update the correct total


    callTotalSettings.innerHTML = callsTotal.toFixed(2);
    smsTotalSettings.innerHTML = smsTotal.toFixed(2);

    totalSettings.innerHTML = totalCost.toFixed(2);

    //color the total based on the criteria
    if (totalCost >= criticalLevel){
        // adding the danger class will make the text red
        totalSettings.classList.add("danger");
    }
    else if (totalCost >= warningLevel ){
        totalSettings.classList.add("warning");
    }
};

settingsBillAddBtn.addEventListener('click', totalSetting);
