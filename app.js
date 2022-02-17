// catch calculat button 
document.getElementById('calculateButton').addEventListener('click', function(){
  const incomeInput = document.getElementById('incomeAmount');
  const foodInput = document.getElementById('foodFor');
  const rentInput = document.getElementById('rentFor');
  const clothesInput = document.getElementById('clothesFor');
  const showTotalExpenses = document.getElementById('totalExpensesInner');
  const showBalance = document.getElementById('balanceInner');

  // error handling
  // income 
  if(isNaN(incomeInput.value) || incomeInput.value <= 0 || incomeInput.value == ''){
    document.getElementById('incomeError').style.display = 'block'
    return
  }
  else{
    document.getElementById('incomeError').style.display = 'none'
  }
  // food 
  if(isNaN(foodInput.value) == false  && foodInput.value >= 0 || foodInput.value == ''){
    document.getElementById('foodError').style.display = 'none';
    if(foodInput.value == ''){
      foodInput.value = 0;
    }
  }
  else if(isNaN(foodInput.value) || foodInput.value < 0){
    document.getElementById('foodError').style.display = 'block';
    showTotalExpenses.innerText = '';
    showBalance.innerText = '';
    return
  }
  // rent 
  if(isNaN(rentInput.value) == false && rentInput.value >= 0 || rentInput.value == ''){
    document.getElementById('rentError').style.display = 'none';
    if(rentInput.value == ''){
      rentInput.value = 0;
    }
  }
  else if(isNaN(rentInput.value) || rentInput.value < 0){
    document.getElementById('rentError').style.display = 'block';
    showTotalExpenses.innerText = '';
    showBalance.innerText = '';
    return
  }
  // clothes 
  if(isNaN(clothesInput.value) == false  && clothesInput.value >= 0 || clothesInput.value == ''){
    document.getElementById('clothesError').style.display = 'none';
    if(clothesInput.value == ''){
      clothesInput.value = 0;
    }
  }
  else if(isNaN(clothesInput.value) || clothesInput.value < 0){
    document.getElementById('clothesError').style.display = 'block';
    showTotalExpenses.innerText = '';
    showBalance.innerText = '';
    return
  }
  // total & balance calculation 
  const totalExpenses = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);
  if(totalExpenses > incomeInput.value){
    document.getElementById('incomeSmallError').style.display = 'block';
    showTotalExpenses.innerText = '';
    showBalance.innerText = '';
    return
  }
  else{
    document.getElementById('incomeSmallError').style.display = 'none';
  }
  showTotalExpenses.innerText = totalExpenses.toFixed(2);
  showBalance.innerText =  (parseFloat(incomeInput.value) - totalExpenses).toFixed(2);
  // enable save button 
  document.getElementById('saveButton').removeAttribute('disabled', true);
})

// catch save button 
document.getElementById('saveButton').addEventListener('click', function(){
  const incomeInput = document.getElementById('incomeAmount');
  const savingInput = document.getElementById('savingInput');
  const showSaving = document.getElementById('savingInner');
  const showBalance = document.getElementById('balanceInner');
  const showRemaining =document.getElementById('remainingInner');

  const getSavingAmount = parseFloat(incomeInput.value) * (parseFloat(savingInput.value) / 100);

  // saving  error 
  if(parseFloat(showBalance.innerText) < getSavingAmount){
    showSaving.innerText = '';
    showRemaining.innerText = '';
    document.getElementById('insufficientSavinError').style.display = 'block';
    return;
  }
  else{
    document.getElementById('insufficientSavinError').style.display = 'none';
  }
  if(isNaN(savingInput.value) || savingInput.value <= 0 || savingInput.value == ''){
    document.getElementById('savingError').style.display = 'block';

    showSaving.innerText = '';
    showRemaining.innerText = '';
    return
  }
  else{
    document.getElementById('savingError').style.display = 'none';
  }

  showSaving.innerText = getSavingAmount.toFixed(2);
  showRemaining.innerText = (parseFloat(showBalance.innerText) - parseFloat(getSavingAmount)).toFixed(2)
})