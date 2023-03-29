function squareDigits(num: number): number {
    if (num < 0) {
        return num;
    }

    const digits = num.toString().split('');
    let result = '';

    for (let i = 0; i < digits.length; i++) {
        const digit = parseInt(digits[i], 10);//впервые узнаю о параметре radix)
        result += (digit * digit).toString();
    }

    return parseInt(result, 10);
}

console.log(squareDigits(9119))
//Вау, это тоже написала сеть. С первого запроса. Причем, этот код с точки зрения типизации выглядит более реалистично,
//чем код из прошлой задачи, потому что нет указания типа при инициализации переменных(очень и очень редко указывают тип при инициализации)