const fibonacci = function(iterations) {
    let num = [1, 1]
    for (let i = 2; i < iterations; i++){
        let x = num.at(-1);
        let y = num.at(-2);
        let z = 0;
        z += x + y;
        num.push(z);
    }
        return num.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
