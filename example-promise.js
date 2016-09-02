function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }
    else {
      reject('a and b need to be numbers.');
    }
  });
}

addPromise(2, 3).then(function(result) {
  console.log(result);
}, function(error) {
  console.log(error);
});

addPromise('Ye', 3).then(function(result) {
  console.log(result);
}, function(error) {
  console.log(error);
}
);
