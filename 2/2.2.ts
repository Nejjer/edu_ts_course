const arr1: (number | null)[] = [1, 2, 3, null];
const arr2: (string | boolean)[] = ['safety', '=', true]
const arr3: (number[] | string[])[] = [
    [1, 2, 3, 4, 5],
    ['1', '2', '3', '4', '5'],
]
const arr4: (number | string | boolean | undefined)[] = [
    1, 2, true, 'str', undefined
]

interface IPeople {
    id: number;
    name: string;
}

const arr5: IPeople[] = [
    {
        id: 1,
        name: 'Студент',
    },
    {
        id: 2,
        name: 'Наставник',
    }
]

//Делал сам. Вот такие задания подходят для изучения типов, а не алгоритмы :/