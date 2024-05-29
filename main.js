// ========================================== Q#3 ========================================
function findFirstNonRepeatedCharacter(inputString) {
    var charCount = new Map();
    // count occurences of each character
    for (var _i = 0, inputString_1 = inputString; _i < inputString_1.length; _i++) {
        var char = inputString_1[_i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    //Find the first non-repeated character
    for (var _a = 0, inputString_2 = inputString; _a < inputString_2.length; _a++) {
        var char = inputString_2[_a];
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    //if no non-repeated character found, return null or an appropriate message
    return null;
}
//...................Example..............
var input = "Sadia";
var result = findFirstNonRepeatedCharacter(input);
if (result !== null) {
    console.log("The first non-repeated character in \"".concat(input, "\" is \"").concat(result, "\"."));
}
else {
    console.log("No non-repeated character found in \"".concat(input, "\"."));
}
;
