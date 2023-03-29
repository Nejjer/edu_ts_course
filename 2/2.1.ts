const arrayDiff = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter(x => !arr2.includes(x));
}
console.log(arrayDiff([2, 2, 2, 2, 3], [2]))
//Решил сам 😎, без нейросети(но стырил строчку со стековерфлоу)))