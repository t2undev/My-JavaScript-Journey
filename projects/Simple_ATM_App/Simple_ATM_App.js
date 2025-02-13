// let alert this string to the browser to confirm that the javascript is connected to the html file
// alert('javascript is connected')

let accountBalance = 50000
// we want to add this balance paragraph element diplaying the balance so we we need to get the element through the dom 

var userName = prompt('Enter your name')
var accountNumber = prompt('Enter your 10 digit account number')

document.getElementById('greeting').innerHTML = `Welcome ${userName}`
 
document.getElementById('accNumber').innerHTML =`Your account number is ${accountNumber}` 


var span = document.getElementById('span')
span.innerHTML = `Click the balance button to display your available balance`



var balanceBtn = document.getElementById('balanceBtn')

balanceBtn.addEventListener('click', function() {
  span.innerHTML = `Your Available balance = #${accountBalance}`
 alert(`Your Available balance is #${accountBalance}`)

})


if (!NaN && document.getElementById('userInp').value == '') {
  let depositBtn = document.getElementById('depoButton')
  depositBtn.disabled = true
}else {

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

  showHistory()

 
})
}




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

  showHistory()
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

  alert(`You have successfully transfer ${transferAmount} from your account to .....user. Your account balance is #${accountBalance}`)
  }
  document.getElementById('userInp').value = ''
  document.getElementById('userInp').focus()

  showHistory()
})


function one(numberOne) {
  // console.log(numberOne);
  // console.log(typeof(numberOne));

  var number1 = document.getElementById('userInp').value += numberOne;
}

function two(numberTwo) {
  // console.log(numberTwo);
  // console.log(typeof(numberTwo));

  var number2 = document.getElementById('userInp').value += numberTwo;
}

function three(numberThree) {
  // console.log(numberThree);
  // console.log(typeof(numberThree));

  var number3 = document.getElementById('userInp').value += numberThree;
}

function four(numberFour) {
  // console.log(numberFour);
  // console.log(typeof(numberFour));

  var number4 = document.getElementById('userInp').value += numberFour;
}

function five(numberFive) {
  console.log(numberFive);
  console.log(typeof(numberFive));

  var number5 = document.getElementById('userInp').value += numberFive;
}

function six(numberSix) {
  // console.log(numberSix);
  // console.log(typeof(numberSix));

  var number6 = document.getElementById('userInp').value += numberSix;
}

function seven(numberSeven) {
  // console.log(numberSeven);
  // console.log(typeof(numberSeven));

  var number7 = document.getElementById('userInp').value += numberSeven;
}

function eight(numberEight) {
  // console.log(numberEight);
  // console.log(typeof(numberEight));

  var number8 = document.getElementById('userInp').value += numberEight;
}

function nine(numberNine) {
  // console.log(numberNine);
  // console.log(typeof(numberNine));

  var number9 = document.getElementById('userInp').value += numberNine;
}

function zero(numberZero) {
  // console.log(numberZero);
  // console.log(typeof(numberZero));

  var number0 = document.getElementById('userInp').value += numberZero;
}



// i want to use my knowledge of arrays and object to add my features the the machine.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let listOfUsers = [];

// const array = new Uint32Array(1);
// let user = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   password: '',
//   accountNumber: self.crypto.getRandomValues(array),
// }



let users = [];

function showHistory() {
  users.push(userName)
  console.log(users);

  for (let i = 0; i < users.length; i++) {
    const userAtThatIndex = users[i];
    console.log(userAtThatIndex);
    document.getElementById('history').innerHTML = `${userAtThatIndex} performed so...so... transaction `
    
  }
}
