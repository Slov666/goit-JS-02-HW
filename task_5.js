const checkForSpam = function (message) {

    const findSpam = ['spam', 'sale']
    const strings = message.toLowerCase();

    for (let i = 0; i < findSpam.length; i += 1) {
        if (strings.includes(findSpam[i])) {
            return true;
        }
    }
    return false;

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true