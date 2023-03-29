function reverseWords(str: string): string {
    // Разбиваем исходную строку на массив слов, используя пробелы в качестве разделителей
    const words: string[] = str.split(" ");

    // Проходим по каждому слову и отзеркаливаем его, используя метод reverse()
    const mirroredWords: string[] = words.map(word => word.split("").reverse().join(""));

    // Используем метод join() для объединения слов обратно в строку, вставляя между ними пробелы
    // Возвращаем итоговую, отзеркаленную строку
    return mirroredWords.join(" ");
}

const str: string = "Это пример!";
const reversedStr: string = reverseWords(str);
console.log(reversedStr);
//Честно, я написал это с помощью бота(https://www.typingmind.com). Прикольно
//Он в первый раз помог с написанием кода, обычно он тупой
