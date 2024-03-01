// EXAMPLE 1 - Remove Property from all Objects in Array in JavaScript

const arr = [
  {id: 1, name: 'Bobby', test: 'abc'},
  {id: 2, name: 'Hadz', test: 'xyz'},
];

arr.forEach(object => {
  delete object['test'];
});

// 👇️ [{id: 1, name: 'Bobby'}, {id: 2, name: 'Hadz'}]
console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove Property from all Objects in Array using Array.map()

// const arr = [
//   {id: 1, name: 'Bobby', test: 'abc'},
//   {id: 2, name: 'Hadz', test: 'xyz'},
// ];

// const newArr = arr.map(({test, ...rest}) => {
//   return rest;
// });

// // 👇️ [{id: 1, name: 'Bobby'},  {id: 2, name: 'Hadz'}]
// console.log(newArr);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove Property from all Objects in Array using `for...of`

// const arr = [
//   {id: 1, name: 'Bobby', test: 'abc'},
//   {id: 2, name: 'Hadz', test: 'xyz'},
// ];

// for (const obj of arr) {
//   delete obj['test'];
// }

// // 👇️ [ { id: 1, name: 'Bobby' }, { id: 2, name: 'Hadz' } ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Remove Property from all Objects in Array using a `for` loop

// const arr = [
//   {id: 1, name: 'Bobby', test: 'abc'},
//   {id: 2, name: 'Hadz', test: 'xyz'},
// ];

// for (let index = 0; index < arr.length; index++) {
//   delete arr['test'];
// }

// // [
// //   { id: 1, name: 'Bobby', test: 'abc' },
// //   { id: 2, name: 'Hadz', test: 'xyz' }
// // ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Remove Property from all Objects in Array using `lodash`

// import _ from 'lodash';

// const arr = [
//   {id: 1, name: 'Bobby', test: 'abc'},
//   {id: 2, name: 'Hadz', test: 'xyz'},
// ];

// const newArray = arr.map(obj => {
//   return _.omit(obj, ['test']);
// });

// // 👇️ [ { id: 1, name: 'Bobby' }, { id: 2, name: 'Hadz' } ]
// console.log(newArray);
