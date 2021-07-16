module.exports = function toReadable(number) {
    const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ',
        'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '
    ];
    const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number == 0) return 'zero';
    if (number <= 19) return a[number].trimEnd();
    if (number > 19 && number < 100) {
        if (number.toString()[1] == 0) return b[number.toString()[0]].trimEnd();
        else return `${b[number.toString()[0]]} ${a[number.toString()[1]]}`.trimEnd();
    }

    if (number > 99 && number < 1000) {
        if (number.toString()[1] == 0 && number.toString()[2] == 0) return `${a[number.toString()[0]]}hundred`;
        else if (number.toString()[1] == 0) return `${a[number.toString()[0]]}hundred ${a[number.toString()[2]]}`.trimEnd();
        else if (number.toString()[1] == 1) return `${a[number.toString()[0]]}hundred ${a[number.toString().slice(1)]}`.trimEnd();
        else return `${a[number.toString()[0]]}hundred ${b[number.toString()[1]]} ${a[number.toString()[2]]}`.trimEnd();
    }
}
