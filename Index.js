let annualIncome=0;
let extraIncome=0;
let deduction=0;
let totalIncome=0;
function getValue(data, inputId) {

    function isInvalidInput(input) {
        const validNumberPattern = /^\d+(\.\d+)?$/;
        return !validNumberPattern.test(input);
    }

    let value;
    const viewspan = document.getElementById(inputId === 'grossannual' ? 'annual' :
                         inputId === 'extraincome' ? 'extra' : 'dedu');

    if (isInvalidInput(data)) {
        viewspan.style.display = 'block'; // Show error icon
        viewspan.title = ' Please enter positive numbers only.';
    } 
    
    else {
        viewspan.style.display = 'none'; // Hide error icon
        viewspan.title = '';
        value = parseFloat(data); // Convert the data to a float

        // Depending on the inputId, set the appropriate value
        if (inputId === 'grossannual') {
            annualIncome = value;
            console.log(annualIncome);
        } else if (inputId === 'extraincome') {
            extraIncome = value;
            console.log(extraIncome);
        } else {
            deduction = value;
            console.log(deduction);
        }
    }
}


var optionValue=0;
function handleSelectChange(event) {
    optionValue=event.target.value;
    console.log('Stored value:', typeof(optionValue));
}

function getTotalIncome(event){
    event.preventDefault();

    if (!validateFields()) {
        return;
    }

totalIncome=annualIncome+extraIncome-deduction;
if(totalIncome<=800000){
    totalIncomeLabel.innerHTML = totalIncome.toFixed(2);
    console.log(totalIncome); 
}
else{
   if(optionValue==="40"){
const tax=(totalIncome*30)/100;
totalIncome=totalIncome-tax;
totalIncomeLabel.innerHTML = totalIncome.toFixed(2);
   }
   else if(optionValue==="40 to 60"){
    const tax=(totalIncome*40)/100;
    totalIncome=totalIncome-tax;
    totalIncomeLabel.innerHTML = totalIncome.toFixed(2);
   }
   else{
    const tax=(totalIncome*10)/100;
    totalIncome=totalIncome-tax;
    totalIncomeLabel.innerHTML = totalIncome.toFixed(2);
   }
   console.log(totalIncome);
}
calculatorview.style.display='none';
modelview.style.display='block';
}

function closemodel(event){
    event.preventDefault(); 
calculatorview.style.display='block';
modelview.style.display='none';
location.reload();
}
function validateFields() {
 
    const annualIncomeInput = document.getElementById('grossannual').value;
    const extraIncomeInput = document.getElementById('extraincome').value;
    const deductionInput = document.getElementById('deduction').value;
    const ageGroupSelect = document.getElementById('mySelect').value;
    const validNumberPattern = /^\d+(\.\d+)?$/;

    if (
        annualIncomeInput === "" ||
        extraIncomeInput === "" ||
        deductionInput === "" ||
        ageGroupSelect === "Select age group" ||
        !validNumberPattern.test(annualIncomeInput) ||
        !validNumberPattern.test(extraIncomeInput) ||
        !validNumberPattern.test(deductionInput)
    ) {
   
        alert("Please fill out all fields and enter numbers also select an age group before submitting.");
        return false;
    }
    return true;
}

const selectElement = document.getElementById('mySelect');
selectElement.addEventListener('change', handleSelectChange);
const calculatorview=document.getElementById('calculator');
const modelview=document.getElementById('model');