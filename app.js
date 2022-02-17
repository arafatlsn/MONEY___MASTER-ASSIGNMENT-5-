// error handling multi used function 
// error handling multi used function 
function errorHandling(inputField, error){
  if(isNaN(inputField.value) == false  && inputField.value >= 0 || inputField.value == ''){
    document.getElementById(error).style.display = 'none';
    if(inputField.value == ''){
      inputField.value = 0;
    }
  }
  else if(isNaN(inputField.value) || inputField.value < 0){
    document.getElementById(error).style.display = 'block';
    showTotalExpenses.innerText = '';
    showBalance.innerText = '';
    return
  }
}

// catch calculate button 
// catch calculate button 
document.getElementById('calculateButton').addEventListener('click', function(){
  const incomeInput = document.getElementById('incomeAmount');
  const foodInput = document.getElementById('foodFor');
  const rentInput = document.getElementById('rentFor');
  const clothesInput = document.getElementById('clothesFor');
  const showTotalExpenses = document.getElementById('totalExpensesInner');
  const showBalance = document.getElementById('balanceInner');

  // error handling
  // income handling
  if(isNaN(incomeInput.value) || incomeInput.value <= 0 || incomeInput.value == ''){
    document.getElementById('incomeError').style.display = 'block'
    return
  }
  else{
    document.getElementById('incomeError').style.display = 'none'
  }
  // used multi function 
  // food handling
  errorHandling(foodInput, 'foodError')
  // rent handling
  errorHandling(rentInput, 'rentError')
  // clothes handling
  errorHandling(clothesInput, 'clothesError')
  // total & balance calculation 
  const totalExpenses = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);
  // total expenses over income handling 
  if(totalExpenses > incomeInput.value){
    document.getElementById('incomeSmallError').style.display = 'block';
    showTotalExpenses.innerText = '';
    showBalance.innerText = '';
    return
  }
  else{
    document.getElementById('incomeSmallError').style.display = 'none';
  }

  // showing result 
  showTotalExpenses.innerText = totalExpenses.toFixed(2);
  showBalance.innerText =  (parseFloat(incomeInput.value) - totalExpenses).toFixed(2);
  // enable save button 
  document.getElementById('saveButton').removeAttribute('disabled', true);
})

// catch save button 
// catch save button 
document.getElementById('saveButton').addEventListener('click', function(){
  const incomeInput = document.getElementById('incomeAmount');
  const savingInput = document.getElementById('savingInput');
  const showSaving = document.getElementById('savingInner');
  const showBalance = document.getElementById('balanceInner');
  const showRemaining =document.getElementById('remainingInner');

  const getSavingAmount = parseFloat(incomeInput.value) * (parseFloat(savingInput.value) / 100);

  // saving  error 
  // insufficient saving error 
  if(parseFloat(showBalance.innerText) < getSavingAmount){
    showSaving.innerText = '';
    showRemaining.innerText = '';
    document.getElementById('insufficientSavinErrorInner').innerText = savingInput.value + '%';
    document.getElementById('insufficientSavinError').style.display = 'block';
    return;
  }
  else{
    document.getElementById('insufficientSavinError').style.display = 'none';
  }
  // saving input string negative-number and empty string handling 
  if(isNaN(savingInput.value) || savingInput.value <= 0 || savingInput.value == ''){
    document.getElementById('savingError').style.display = 'block';

    showSaving.innerText = '';
    showRemaining.innerText = '';
    return
  }
  else{
    document.getElementById('savingError').style.display = 'none';
  }
// showing result 
  showSaving.innerText = getSavingAmount.toFixed(2);
  showRemaining.innerText = (parseFloat(showBalance.innerText) - parseFloat(getSavingAmount)).toFixed(2)
})