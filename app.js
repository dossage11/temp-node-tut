// const amount = 45

// if(amount < 50){
//     console.log('small number');
// }
// else{
//     console.log('large number');
// }

// console.log('hey you!!!');


// setInterval(()=>{
// console.log('hello shit');

// }, 1000);

// const names = require('./names')
// const sayHi = require('./utils')
// const data = require('./alternative')
// require('./mind')
// console.log(data)
// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);

const _ = require('lodash');
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)


console.log(newItems);
