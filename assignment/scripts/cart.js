console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// addItem function
let basket = [];
function addItem ( item ) {
  basket.push(item);
  return true;
};
console.log(`Basket is empty: ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log('Adding oranges (expect true)', addItem('oranges'));
console.log('Adding strawberries (expect true)', addItem('strawberries'));
// console.log('Adding carrots (expect true)', addItem('carrots'));
// console.log('Adding salad (expect true)', addItem('salad'));
console.log(`Basket is now ${basket}`);


// listItems function
function listItems () {
  for (let i=0; i < basket.length; i++) {
    console.log(basket[i]);
  }
  return basket;
};
console.log('Basket items listed in their own row', listItems());


// empty function
function empty () {
  let basket = [];
  return basket;
};
console.log('Resetting back to an empty array:', empty());
