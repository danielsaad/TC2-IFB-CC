var Currency = require('./currency2');

var convert = new Currency(0.91);

console.log('50 dólares canadenses equivalem a esta quantidade de dólares americanos: ',convert.canadianToUs(50));
console.log('30 dólares americanos equivalem a esta quantidade de dólares canadenses: ',convert.UsToCanadian(30));
