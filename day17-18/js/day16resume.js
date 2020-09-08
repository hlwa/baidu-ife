var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
 var products= ['Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];

for (var i = 0; i <= products.length; i++) { // number 2
  // number 3
var x=products[i].indexof(':');
var product=products[i].slice(0,x-1);
var price=Number(products[i].slice(x+1,products.length));
  // number 4
  
  // number 5
  itemText = product +'-'+ price;
  
  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
  total+=price;
}

totalBox.textContent = 'Total: $' + total.toFixed(2);

