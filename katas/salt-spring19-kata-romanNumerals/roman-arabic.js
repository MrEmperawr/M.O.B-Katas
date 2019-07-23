const dragoshNewName = 'Dragosh debug boi';

function calculate(input) {

    const roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    const arabic = [1000, 500, 100, 50, 10, 5, 1];
    const exceptions = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        let regex = new RegExp(`${roman[i]}`);

        while (regex.test(input)) {
            input = input.replace(regex, '');
            result += arabic[i];
        }
    }
    console.log(dragoshNewName);
    return result;
}
module.exports.calculate = calculate;















// const singles = ['I','II','III','IV','V','VI','VII','VIII','IX','X'];
// const tens = ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
// const hundreds = ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
// const thousands = ['M','MM','MMM','MMMM','MMMMM','MMMMMM','MMMMMMM','MMMMMMMM','MMMMMMMMM'];
// let finalNumber = [];
// let inputNumber = '1000';
// let extractNumber = '';

// function romanToArabic (inputNumber) {
//     extractNumber = inputNumber.charAt(0) -1;

//     finalNumber += thousands[extractNumber];

//     extractNumber = inputNumber.charAt(1) -1;

//     finalNumber += hundreds[extractNumber];

//     extractNumber = inputNumber.charAt(2) -1;

//     finalNumber += tens[extractNumber];

//     extractNumber = inputNumber.charAt(3) -1;

//     finalNumber += singles[extractNumber];
//     console.log(finalNumber);
//     return finalNumber;
// }

// romanToArabic(inputNumber);


// // function toRoman (inputNumber) {
// //     for (let i = 0; i < inputNumber.length; i++) {

// //     inputNumber.index[0]
// //     }
// // }