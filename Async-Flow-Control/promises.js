/* 
  To construct a promise instance, use the Promise(..) constructor:
*/

const p = new Promise( function (resolve, reject) {
  // ..
});

// If you call reject(..), the promise is rejected, and if any value
// is passed to reject(..), it is set as the reason for rejection

// If you call resolve(..) with no value, or any nonpromise value,
// the promise is fullfilled

// If you call resolve(..) and pass another promise, this promise
// simply adopts the state - whether immediate or eventual -
// of the passed promise (either fullfillment or rejection)

// Example: ajax(..) utility that expects to be able to call an
// error-first style callback

function ajax(url, cb) {
  // make request, eventually call 'cb(..)'
}

// ..

ajax("http://some.url.1", function handler(err, contents) {
  if (err) {
    // handle ajax error
  } else {
    // handle 'contents' success
  }
});

// The code ^ could be converted as follows:
function ajax(url) {
  return new Promise( function pr(resolve, reject) {
    // make request, eventually call
    // either 'resolve(..)' or 'reject(..)'
  });
}

// ..

ajax("http://some.url.1")
  .then(
    function fulfilled(contents) {
      // handle 'contents' success
      const result = 11;
      return result;
  }, 
    function rejected(reason) {
      // handle ajax error reason
      const result = 10;
      return result;
    }
);

test('it should call success method when resolved promise', () => {
  const input = 11
  const url = ('http://some.url.man.1')
  const result = ajax(url, true, false)
  expect(result).toEqual(input)
});

test('it should call rejected method when promise has error', () => {
  const input = 11
  const url = ('http://some.url.man.1')
  const result = ajax(url, false, true)
  expect(result).toEqual(input)
});
