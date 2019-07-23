/* eslint-disable no-console */
const getRomanNum = number => {
    const roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    const divisible = [1000, 500, 100, 50, 10, 5, 1];
    //let arabicNum = process.argv[2];
    let arabicNum = number;
    let romanNum = [];
     
    for (let i = 0; i < 7; i++) {
        while (Math.floor(arabicNum/divisible[i])*divisible[i] >= divisible[i]) {
            romanNum.push(roman[i]);
            arabicNum -= divisible[i];
        }
    }    
    return romanNum.join('');
}

const refineRomanNum = number => {
    let romanNum = getRomanNum(number);
    const romanMinor = ['I', 'X', 'C', 'M'];
    const romanMajor = ['V', 'L', 'D'];

    for (let i = 0; i < 3; i++) {
        const majorPattern = new RegExp(`${romanMajor[i]}${romanMinor[i]}{4}`)
        const minorPattern = new RegExp(`${romanMinor[i]}{4}`);

        if (majorPattern.test(romanNum)) romanNum = romanNum.replace(majorPattern, romanMinor[i] + romanMinor[i+1]);
        if (minorPattern.test(romanNum)) romanNum = romanNum.replace(minorPattern, romanMinor[i] + romanMajor[i]);
    }
    console.log(romanNum);
    return romanNum;
}

refineRomanNum();

module.exports.refineRomanNum = refineRomanNum;