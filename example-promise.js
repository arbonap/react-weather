// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found!');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success!!', temp)
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// // The standard way to create a Promise
// // is by using the new Promise constructor
// // which accepts a handler that is given
// // two functions as parameters. The first
// // handler (typically named resolve) is a
// // function to call with the future value
// // when it's ready; and the second handler
// // (typically named reject) is a function
// // to call to reject the Promise if it can't
// // resolve the future value.
//
// getTempPromise('San Juan').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

// Challenge area

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A & b must be numbers');
    }
  });
}


addPromise(6, 8).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});

addPromise('andrew', 99).then(function (sum) {
  console.log('this should not show up');
}, function (err) {
  console.log('This should appear', err);
});
