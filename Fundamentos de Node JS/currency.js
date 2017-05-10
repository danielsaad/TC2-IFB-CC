// Taxa de câmbio de dólar canadense para dólar americano
var canadianDollar = 0.91;

// Realiza o arredondamento para duas casas decimais
function roundTwoDecimals(amount) {
	return Math.round(amount*100)/100;
}

// Insere no objet exports a função que realiza a conversão
// de dólar canadense para americano
exports.canadianToUs = function(canadian) {
	return roundTwoDecimals(canadian* canadianDollar);
}

// Insere no objet exports a função que realiza a conversão
// de dólar americano para canadense
exports.UsToCanadian = function(us) {
	return roundTwoDecimals(us/canadianDollar);
}
