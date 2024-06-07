// let alert this string to the browser to confirm that the javascript is connected to the html file
// alert('javascript is connected')

let accountBalance = 50000
// we want to add this ballance paragraph element diplaying the balance so we we need to get the element through the dom 

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
  accountBalance += depositAmount
  span.innerHTML = `${accountBalance}`

  userInpu = document.getElementById('userInp').value = ''
  userInpu = document.getElementById('userInp').focus()

  
  // alert(userInpu + ' Has been successfully added to your balance. your new account ballance is ' + depositAmount) 
})
