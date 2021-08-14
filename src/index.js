module.exports = function toReadable (number) {
    let  numericOne = ['zero', 'one', 'two', 
                     'three', 'four', 'five', 
                    'six', 'seven', 'eight', 'nine']

    let numericTwo = ['ten', 'eleven', 'twelve', 'thirteen', 
                    'fourteen', 'fifteen', 'sixteen',
                    'seventeen', 'eighteen', 'nineteen']

    let numericThree = ['ten','twenty', 'thirty', 'forty', 'fifty', 
                    'sixty', 'seventy', 'eighty', 'ninety' ]
  
    let numberString = number.toString(); //число в строку

    switch (numberString.length){ //проверяем длину числа

        case 1: //если длина числа 1
            numberString = numericOne[number];
        break;

        case 2: // если длина числа два
            if (number % 10 === 0) { // 10, 30, 40...
                numberString = numericThree[number/10-1]
            } else if (number < 20) { // 11, 15, 17...
                numberString = numericTwo[number%10]
            } else { // 34, 67, 89...
                numberString = numericThree[(number-number%10)/10 -1] + ' ' + numericOne[number%10]
            }
        break;

        case 3: // если длина числа три
        if (number % 100 === 0) { // 100, 300, 400...
            numberString = numericOne[number/100] + ' hundred'			
        } else if (number % 10 === 0){ //140, 150...
            numberString = numericOne[(number-number%100)/100] + ' hundred ' + numericThree[(number%100)/10 - 1]
        } else if (number % 100 < 20) { // 311, 617..
            numberString = numericOne[(number-number%100)/100] + ' hundred ' + numericTwo[(number%100)%10]
        } else { // 331, 687..
            numberString = numericOne[(number-number%100)/100] + ' hundred ' + numericThree[(number%100-((number%100)%10))/10 - 1] + ' ' + numericOne[(number%100)%10]
        }
}
return numberString;
}
