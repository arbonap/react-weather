var names = ['Patricia', 'Julia', 'Kat'];
//
// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//

// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Patricia'));

// Major difference between arrow and anonymous
// functions!

// Anonymous functions: have a
// new this binding (slash is reset?)
// while arrow take on their parents'
// this binding

// Arrow functions automatically returns last thing

//
// var person = {
//   name: 'Patricia',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

// Challenge area
function add (a, b) {
  return a + b;
}


// console.log(add(1, 3));
// console.log(add(9, 0));




// addStatement - use curly braces
// var addStatement = (a, b) => {
//   return a + b;
// }

add((a, b) => {
  a + b;
});

console.log(add(5,0));

// addExpression - use short expression sytnax

var addExpression = (a, b) => a + b;
console.log(addExpression(9, 9));
