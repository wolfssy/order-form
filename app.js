'use strict';

// Image constructor
function FormData() {
  this.selected = selected;
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
  this.credit = credit;
  this.qnty = qnty;
  // this.source = 'img/' + this.name + '.jpg';
  FormData.all.push(this); // when object constructed, push into the all[] array.
}

FormData.all = [];
var addCart = document.getElementById('addToCart');

var selected = document.getElementById('selected');

//event listener to addToCart
function addToCart(e){
  e.preventDefault();
  var name = document.getElementById('name').value;
  var street = document.getElementById('street').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var zip = document.getElementById('zip').value;
  var phone = document.getElementById('phone').value;
  var credit = document.getElementById('credit').value;
  var qnty = document.getElementById('qnty').value;
  console.log('qnty', qnty);
  // if(name === ' ' || street === ' ' || city === ' '|| state === ' '|| zip === ' '|| phone === ' '|| credit === ' '|| qnty === ' '){
  //   alert('Please fill in ALL the fields');
  //   return;
  // }
  // JSON.stringify(FormData.all);
  localStorage.setItem('FormData.all', JSON.stringify(FormData.all));
  // localStorage.setItem('Pics', JSON.stringify(Pictures.all));
  console.log(localStorage);

  console.log('inside addToCart function');
  new FormData(name,street,city,state,zip,phone,credit,qnty);
  // console.log(FormData.all);
} // addToCart END


addCart.addEventListener('click', addToCart);
// selected.addEventListener('change', ) // ADD A FUNCTION TO FIND IMAGE OF ITEM SELECTED
