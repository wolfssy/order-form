'use strict'

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

// turn this into an object

// new FormData

//event listener to addToCart
function addToCart(e){
  JSON.stringify(FormData.all);
  localStorage.setItem('FormData.all', JSON.stringify(FormData.all));
  FormData.name = document.getElementById('name');
  FormData.street = document.getElementById('street');
  FormData.city = document.getElementById('city');
  FormData.state = document.getElementById('state');
  FormData.zip = document.getElementById('zip');
  FormData.phone = document.getElementById('phone');
  FormData.credit = document.getElementById('credit');
  FormData.qnty = document.getElementById('qnty');
  //
  // var selected = document.getElementById('selected');;
  // var name = document.getElementById('name');
  // var street = document.getElementById('street');
  // var city = document.getElementById('city');
  // var state = document.getElementById('state');
  // var zip = document.getElementById('zip');
  // var phone = document.getElementById('phone');
  // var credit = document.getElementById('credit');
  // var qnty = document.getElementById('qnty');
  if(name === '' || street === '' || city === ''|| state === ''|| zip === ''|| phone === ''|| credit === ''|| qnty === ''){
    alert('Please fill in ALL the fields');
    return;
  }
  console.log('blah');
  new FormData(name,street,city,state,zip,phone,credit,qnty);
  console.log(FormData.all);
}

document.getElementById('addToCart').addEventListener('click', addToCart);
