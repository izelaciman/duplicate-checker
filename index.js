
// This duplicate checker runs on O(n) time compexity and O(n) Auxiliary Space.
// For performance improvement it uses Typed Arrays (ES6) for browser compatibility please check https://caniuse.com/#search=Int32Array
// For linting I used standartd JS , this is why there won't be trailing semi columns at the end of lines.
// Default value for N is 1,000,000.
function duplicateChecker (n = (1000 * 1000)) {
  // Creating a random array
  const max = n
  const min = 1
  const arrSize = n + 1
  let arr = new Int32Array(arrSize) // Using typed array

  for (let i = 0; i <= arrSize; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1)) + min // Generates random values between min - max
  }
  // For comparison and display purposes log original array and length.
  console.log(`Array length: ${arr.length}\nRandomly generated array: ${arr}`)

  // Testing for duplicates
  let counts = new Int32Array(arrSize)

  for (let i = 0; i < arrSize; i++) {
    if (counts[arr[i]] === undefined) {
      counts[arr[i]] = 1
    } else {
      counts[arr[i]]++
      // (Edge Case) To avoid priniting duplicates multiple time.
      // For instance [1,3,3,4,5,6,3] it will print 3 two times.
      if (counts[arr[i]] === 2) console.log(arr[i]) // This means for the first time we are running into duplicate for this value.
    }
  }
}

// Node Command line integration to get command line arguments.

var args = process.argv.slice(2)
var arg
args.forEach(function (val, index, array) {
  if (index === 0) {
    arg = parseInt(val)
  }
})

console.log('duplicate checker is runnig.')

duplicateChecker(arg)

console.log('duplicate checker finished running.')
