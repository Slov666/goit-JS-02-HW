let input;
const numbers = [];
let total = 0;



do {
    input = prompt('Введите число');
    if (input === null) {
        break;
    }
    const notANumber = Number.isNaN(Number(input));
    if (notANumber) {
        console.log('Было введено не число');
        continue;
    }
    input = Number(input);
    numbers.push(input)
}
while (true)
for (const number of numbers) {
    total = number + total;
}

console.log('Total: ', total);
console.log('Total arrey: ', numbers);




/* for (let i = 0; i < 10000; i += 1) {
    input = prompt('Введите число');
    if (input === null) {
        break;
    }
    const notANumber = Number.isNaN(input);
    if (notANumber) {
        console.log('Было введено не число');
        continue;
    }
    input = Number(input);
    if (input === 0) {
        continue;
    }
    total = input + total;
    numbers.push(total)
}
console.log('Total: ', total);
console.log('Total arrey: ', numbers); */