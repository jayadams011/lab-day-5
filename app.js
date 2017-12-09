'use strict';

function sum(a,b){ //eslint-disable-line
  var theSum = a + b;
  var message = "The sum of' + a + 'and' + b + 'is' + theSum + '.'";
  return [theSum, message];
  console.log(theSum,message);
}
sum(4,7);
testSum(4,7);
