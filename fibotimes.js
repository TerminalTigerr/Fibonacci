const math = require('./math')
for(let i =0; i < 8000; i++) {
  let now = new Date().toISOString()
  console.log(`${now} Fibonacci for ${i} = ${math.fibonacciLoop(i)}`)
}