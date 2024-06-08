// let alert this string to the browser to confirm that the javascript is connected to the html file
// alert('javascript is connected')

let accountBalance = 50000
// we want to add this ballance paragraph element diplaying the balance so we we need to get the element through the dom 

var userName = prompt('Enter your name')

document.getElementById('greeting').innerHTML = `Welcome back ${userName}`


var span = document.getElementById('span')
span.innerHTML = `${accountBalance}`



var balButton = document.getElementById('balButton')

balButton.addEventListener('click', function() {
  console.log('hello world');

})


var depoButton = document.getElementById('depoButton')
depoButton.addEventListener('click', function(){
  var userInpu = document.getElementById('userInp').value
  // console.log(typeof(userInpu)); //return string value

  let depositAmount = Number(userInpu) //convert the input data to a number
  // console.log(typeof(depositAmount)); //return number value


  if(!NaN && depositAmount > 0) {
    accountBalance += depositAmount
  span.innerHTML = `${accountBalance}`
  }else{
    alert('Deposit Amount must be greater than zero')
    
  }
  
  if(!NaN && depositAmount > 0) {
    alert(`${depositAmount} Has been successfully added to your balance. your account ballance is #${accountBalance}`)
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
    alert('Debit amount must be above #0')
  }else if (!NaN && debitAmount > accountBalance) {
    alert('Insufficient fund, the debit amount is above your available ballance ')
  }else if (!NaN && debitAmount < accountBalance) {
    accountBalance -= debitAmount
    span.innerHTML = `${accountBalance}`
    alert(`${debitAmount} Has been debited from your account, your ballance is #${accountBalance}`)
  }

  userInpu = document.getElementById('userInp').value = ''
  userInpu = document.getElementById('userInp').focus()
})

