

exports.farenheit2Celsius = function(farenheit) {
  return((farenheit-32)*(5/9));
}

exports.celsius2Farenheit = function(celsius) {
  return(celsius*(9/5) + 32);
}
