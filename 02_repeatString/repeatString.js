

const repeatString = function(string, times) {
    let result = '';
    for (let i = 0; i < times; i++){
        result += string;
    }
    if (times < 0){
        result = 'ERROR'
        return result;
    }
    else return result;
};

// Do not edit below this line
module.exports = repeatString;

/*
function repeatString(str, times) {
    let result = '';
    for (let i = 0; i < times; i++){
        result += str;
    }
    return result;
}
console.log(repeatString('hey', 3));
*/