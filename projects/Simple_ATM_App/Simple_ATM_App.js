// let alert this string to the browser to confirm that the javascript is connected to the html file
// alert('javascript is connected')

let accountBalance = 50000
// we want to add this balance paragraph element diplaying the balance so we we need to get the element through the dom 

var userName = prompt('Enter your name')
var accountNumber = prompt('Enter your 10 digit account number')

document.getElementById('greeting').innerHTML = `Welcome back ${userName}`
 
document.getElementById('accNumber').innerHTML =`Your account number is ${accountNumber}` 


var span = document.getElementById('span')
span.innerHTML = `Click the balance button to display your available balance`



var balanceBtn = document.getElementById('balanceBtn')

balanceBtn.addEventListener('click', function() {
  span.innerHTML = `Your Available balance = #${accountBalance}`
 alert(`Your Available balance is #${accountBalance}`)

})


var depoButton = document.getElementById('depoButton')
depoButton.addEventListener('click', function(){
  var userInpu = document.getElementById('userInp').value
  // console.log(typeof(userInpu)); //return string value

  let depositAmount = Number(userInpu) //convert the input data to a number
  // console.log(typeof(depositAmount)); //return number value


  if(!NaN && depositAmount > 0) {
    accountBalance += depositAmount
  span.innerHTML = `Your current balance is #${accountBalance}`
  }else{
    alert('Deposit Amount must be greater than zero')
    
  }
  
  if(!NaN && depositAmount > 0) {
    alert(`${depositAmount} Has been successfully added to your balance. your account balance is #${accountBalance}`)
  }
   

  userInpu = document.getElementById('userInp').value = ''
  userInpu = document.getElementById('userInp').focus()

  
})

let withdrawBtn = document.getElementById('withdrawBtn')
withdrawBtn.addEventListener('click', function(){
  let debit = document.getElementById('userInp').value
  // console.log(typeof(debit));
  let debitAmount = Number(debit)
  // console.log(typeof(debitAmount));
  if (!NaN && debitAmount <= 0) {
    alert(`Debit amount must be above #0 and must be less than #${accountBalance}`)
  }else if (!NaN && debitAmount > accountBalance) {
    alert('Insufficient fund, the debit amount is above your available balance ')
  }else if (!NaN && debitAmount < accountBalance) {
    accountBalance -= debitAmount
    span.innerHTML = `Your current balance is #${accountBalance}`
    alert(`${debitAmount} Has been debited from your account, your balance is #${accountBalance}`)
  }

  userInpu = document.getElementById('userInp').value = ''
  userInpu = document.getElementById('userInp').focus()
})


var transferBtn = document.getElementById('transferBtn')
transferBtn.addEventListener('click', function(){
  var userInpu = document.getElementById('userInp').value
  // console.log(typeof(userInpu));
  let transferAmount = Number(userInpu)
  // console.log(typeof(transferAmount));

  if (!NaN && transferAmount <= 0) {
    alert(`transferAmount amount must be above #0 and must be less than #${accountBalance}`)
  }else if (!NaN && transferAmount > accountBalance) {
    alert('Insufficient fund, the transferAmount is above your available balance check your account balance and try again')
  }else if (!NaN && transferAmount < accountBalance && accountBalance > 0) {
    accountBalance -= transferAmount
  span.innerHTML = `Your current balance is #${accountBalance}`

  alert(`${transferAmount} Has been debited from your account, your balance is #${accountBalance}`)
  }
  document.getElementById('userInp').value = ''
  document.getElementById('userInp').focus()
})
