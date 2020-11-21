var FormData = require('form-data');
const fetch = require('node-fetch');

var diceNumber = 2;
var diceValue = 2;
var maxCombinaison = Math.pow(diceValue, diceNumber);
var rangeValue = {};
var distribution = {};

function createNDimArray(dimensions, prev) {
 var ret = undefined;
 if(dimensions.length==1){
    ret = new Array(dimensions[0]);
    for (var i = 0; i < dimensions[0]; i++) {
        ret[i]= (prev + ' ' + parseInt(i + 1, 10)).trim();
    }
    return ret;     
 }
 else{
    //recursion
    var rest = dimensions.slice(1);
    ret = new Array(dimensions[0]);
    for (var i = 0; i < dimensions[0]; i++)
        ret[i]=createNDimArray(rest, (prev ? prev : '') + ' ' + parseInt(i + 1));
    return ret;
 }
}

var diceCombinaison = function(diceNumber, diceValue) {
	var arr = [];

	for (var i = 0; i < diceNumber; i++) {
		arr.push(diceValue);
	}

	return arr;
}

function fillRangeValue(arr) {
	var i, result;

	if (Array.isArray(arr)) {
		for (i = 0; i < arr.length; i++) {
			fillRangeValue(arr[i]);
		}
	} else {
		result = arr.split(' ').reduce(function (accumulator, currentValue) {
			return parseInt(accumulator, 10) + parseInt(currentValue, 10)
		}, 0);

		rangeValue[result] = (rangeValue[result] ? rangeValue[result] + 1 : 1);
	}
}

var matrix = createNDimArray(diceCombinaison(diceNumber, diceValue));
fillRangeValue(matrix);
console.log('Combinaison Matrix', matrix);
console.log('Max combinaison', maxCombinaison);
console.log('Range value', rangeValue);

function test() {
	const formData  = new FormData();
	formData.append('program', 'output 2d2');

	 fetch('https://anydice.com/calculator_limited.php', {
		method: 'POST',
		body: formData,
	}).then(function (result) {
		console.log('distribution', JSON.stringify(result));
	});
}

test();