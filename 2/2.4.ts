function modifySentence(sentence: string): string {
  const words: string[] = sentence.split(" "); // Разбиваем предложение на массив слов

  // Проходимся по каждому слову и изменяем первую букву на заглавную
  for (let i = 0; i < words.length; i++) {
    const firstLetter: string = words[i][0].toUpperCase(); // Получаем первую букву слова в верхнем регистре
    const restLetters: string = words[i].slice(1); // Получаем остальную часть слова без первой буквы
    words[i] = `${firstLetter}${restLetters}`; // Собираем слово с измененной первой буквой
  }

  const firstWordLength: number = words[0].length; // Получаем длину первого слова
  words.splice(firstWordLength, 1); // Удаляем слово с индексом, равным длине первого слова

  return words.join(" "); // Объединяем слова с пробелами и возвращаем предложение с заглавными буквами с удаленным словом
}

// Пример использования функции modifySentence
console.log(
  modifySentence(
    "Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили."
  )
); // Выводит "Сегодня Прекрасный На Улице"
console.log(modifySentence("программирование это очень интересно и полезно"));
//Вау, нейросеть запомнила контекст и написала код с первого запроса!
