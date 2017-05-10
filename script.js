
var blackBox1 = document.getElementById('black-box1');
var jumpBox1 = document.getElementById('box-jump1');

var blackBox2 = document.getElementById('black-box2');
var jumpBox2 = document.getElementById('box-jump2');

var blackBox3 = document.getElementById('black-box3');
var jumpBox3 = document.getElementById('box-jump3');

var blackBox4 = document.getElementById('black-box4');
var jumpBox4 = document.getElementById('box-jump4');

var blackBox5 = document.getElementById('black-box5');
var jumpBox5 = document.getElementById('box-jump5');




jumpBox1.addEventListener('click', function() {
  blackBox1.style.background = 'green';
  blackBox1.style.width = '900px';
  setTimeout(function() {
    blackBox1.style.background = 'black';
    blackBox1.style.width = '100px';
  }, 1000);
});


jumpBox2.addEventListener('click', function() {
  blackBox2.style.background = 'green';
  blackBox2.style.width = '600px';
  setTimeout(function() {
    blackBox2.style.background = 'black';
    blackBox2.style.width = '100px';
  }, 2000);
});


jumpBox3.addEventListener('click', function() {
  blackBox3.style.background = 'green';
  blackBox3.style.width = '1000px';
  setTimeout(function() {
    blackBox3.style.background = 'black';
    blackBox3.style.width = '100px';
  }, 3000);
});



jumpBox4.addEventListener('click', function() {
  blackBox4.style.background = 'green';
  blackBox4.style.width = '400px';
  setTimeout(function() {
    blackBox4.style.background = 'black';
    blackBox4.style.width = '100px';
  }, 1000);
});


jumpBox5.addEventListener('click', function() {
  blackBox5.style.background = 'red';
  blackBox5.style.width = '1800px';
  setTimeout(function() {
    blackBox5.style.background = 'black';
    blackBox5.style.width = '100px';
  }, 5000);
});

//
//var form = document.getElementById("who");
//
//form.onsubmit = function () {
//    
//   if ( form.whois.value == "" ) {
//       alert("Jangan Kosong DUNK, YOU KNOW THE ANSWER !"); 
//       return false;
//       
//       else if ( form.whois.value == "YOU" ) {
//           alert ("YES, YOU WIN!!");
//            return true;
//       }
//       else {
//           alert("Hmmm....");
//           return false;
//       }



