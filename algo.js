
var input = "abdbbadr";     // change input in order to cheack code is working or not
var arrayedInput = [];
var output = [];
var count = 0;
var finalOutput = "";
function arrUP(input) {    // This funtion change string to array and change first of sting elemnt to upper case letter
    arrayedInput[0] = input[0].toUpperCase();

    for (let i = 1; i < input.length; i++) {
        arrayedInput.push(input[i]);
    }
}
function toNum() {    // to find constant number and replace with number
    arrUP(input);
    for (let i = 1; i < arrayedInput.length; i++) {
        if (arrayedInput[i] != 'a' && arrayedInput[i] != 'i' && arrayedInput[i] != 'e' && arrayedInput[i] != 'u' && arrayedInput[i] != 'o' && arrayedInput[i] != 'u') {
            arrayedInput[i] = 1;
        }
    }
}
function out() {
    toNum();
    for (let i = 0; i < arrayedInput.length; i++) {
        if (typeof arrayedInput[i] == 'string') {
            output.push(arrayedInput[i]);
        }
        else if (typeof arrayedInput[i] == 'number') {
            count++;
            if (typeof arrayedInput[i + 1] == 'string' || typeof arrayedInput[i + 1] == 'undefined') {
                output.push(count);
                count = 0;
            }
        }
    }


}

out();
for (let i = 0; i < output.length; i++) {
    finalOutput += output[i];
}
console.log(finalOutput);

