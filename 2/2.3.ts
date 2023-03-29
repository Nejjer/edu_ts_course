function capitalizeWords(sentence: string): string {
  const words: string[] = sentence.split(" "); // Разбиваем предложение на массив слов

  // Проходимся по каждому слову и изменяем первую букву на заглавную
  for (let i = 0; i < words.length; i++) {
    const firstLetter: string = words[i][0].toUpperCase(); // Получаем первую букву слова в верхнем регистре
    const restLetters: string = words[i].slice(1); // Получаем остальную часть слова без первой буквы
    words[i] = `${firstLetter}${restLetters}`; // Собираем слово с измененной первой буквой
  }

  return words.join(" "); // Объединяем слова с пробелами и возвращаем предложение с заглавными буквами
}

// Пример использования функции capitalizeWords
console.log(capitalizeWords("сегодня прекрасный день")); // Выводит "Сегодня Прекрасный День"
console.log(capitalizeWords("программирование это интересно")); // Выводит "Программирование Это Интересно"
//Да, опять нейросеть. Лень думотб
