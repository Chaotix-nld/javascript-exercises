const palindromes = function (string) {
    const cleanedString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const newArray = Array.from(cleanedString).reverse();
    const reverseString = newArray.toString().replace(/[^a-zA-Z0-9]/g, '');

    if ( cleanedString === reverseString){
    return true;
    }
    else {
    return false
    };
};

// Do not edit below this line
module.exports = palindromes;
