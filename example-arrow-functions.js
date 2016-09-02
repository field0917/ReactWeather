var names = ['Yuan', 'Chao', 'Ling'];
//
// names.forEach(function (name, index) {
//   console.log('a[' + index + '] = ' + name);
// });
//
// names.forEach((name, index) => console.log(index + ': ' + name));

// var returnMe = (name) => name + '^_^';
// console.log(returnMe('Yuan'));

// var person = {
//   name: 'Ting',
//   greet: function () {
//     names.forEach(function(name) {
//     console.log(this.name + ' says hi to ' + name); //this.name becomes undefined instead of 'Ting'
//     });
//   }
// }
// var person = {
//   name: 'Ting',
//   greet: function () {
//     names.forEach((name) => {   //arror function can solve the 'this' problem
//     console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
//
// person.greet(names);

var addStatement = (a, b) => {
  return a + b;
};
var addExpression = (a, b) => a + b;
console.log(addExpression(2,3));
