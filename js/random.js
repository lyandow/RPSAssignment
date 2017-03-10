const button1 = document.getElementById('gen1');
const button10 = document.getElementById('gen10');
const button100 = document.getElementById('gen100');
const button1K = document.getElementById('gen1000');
const button5K = document.getElementById('gen5000');
const buttonClear = document.getElementById('clearButton');
const customNum = document.getElementById('custNum');
const numsP = document.getElementById('nums');



function gen (amount) {
  var count = 0;

  while (count < amount) {
    rand();
    count += 1;
  }
}

function rand () {
  numsP.innerHTML += (Math.floor(Math.random() * 9) + 1);
}

customNum.addEventListener ('change', function (){
  var cust = parseInt(customNum.value);
  gen(cust);
})

buttonClear.addEventListener ('click', function () {
  numsP.innerHTML = "";
})

button1.addEventListener ('click', function (){
  gen(1);
});

button10.addEventListener ('click', function (){
  gen(10);
});

button100.addEventListener ('click', function (){
  gen(100);
});

button1K.addEventListener ('click', function (){
  gen(1000);
});

button5K.addEventListener ('click', function (){
  gen(5000);
});
