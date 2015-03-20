var inputs = process.argv.slice(2);
var finalVal = inputs.reduce(function(total, num) {
	return Number(total) + Number(num);
});
console.log(finalVal);