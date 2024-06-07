// let alert this string to the browser to confirm that the javascript is connected to the html file
// alert('javascript is connected')

let accountBalance = 50000
// we want to add this ballance paragraph element diplaying the balance so we we need to get the element through the dom 

var displayBalance = document.getElementById('displayBalance')
displayBalance.innerHTML += `<span>${accountBalance}</span>`



var balButton = document.getElementById('balButton')

balButton.addEventListener('click', function() {
  console.log('hello world');

})


var depoButton = document.getElementById('depoButton')
depoButton.addEventListener('click', function(){
  var userInpu = document.getElementById('userInp').value
  console.log(userInpu);
  let newBalance = (accountBalance + userInpu)
  console.log(newBalance);
  displayBalance.innerHTML += `<span>${newBalance}</span>`
  
  // alert(userInpu + ' Has been successfully added to your balance. your new account ballance is ' + newBalance) 
})
