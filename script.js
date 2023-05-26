function getSum() {
    acc = 0;
    return function(num) {
    acc = acc + num;
		return acc
    }
}


let sum = getSum();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
