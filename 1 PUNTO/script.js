const sumarElementos = array => {
    let result = '';
    let sumTotal = 0;
    for (const num of array) {
        const numLength = num.toString().length;
        result += `+ ${'-'.repeat(numLength)} +\n`;
        result += `| ${num} |\n`;
        result += `+ ${'-'.repeat(numLength)} +\n`;
        sumTotal += num;
    }
    const totalLength = sumTotal.toString().length;
    result += `+ ${'='.repeat(totalLength)} +\n`;
    result += `| ${sumTotal} |\n`;
    result += `+ ${'='.repeat(totalLength)} +\n`;
    return result;
};

const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
console.log(sumarElementos(arrayNumeros));