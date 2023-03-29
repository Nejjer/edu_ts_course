const actor = {
    name: 'Michael',
    firstName: 'Ivanov',
    country: 'Russia',
    city: 'Machachkala',
    hasOskar: false,
    filmsCount: 10,
    age: 14, // вместо строки пишем число
    languages: ['RU-ru', 'EN-us', 'TR-tr'],
};
const howOldWillBeActorAfterTwentyYears = (actor) => {
    return actor.age + 20;
}
console.log(howOldWillBeActorAfterTwentyYears(actor)); // '1420'
//Код на голом JS не имеет типизации, от чего могут происходить такие ошибки, которую я исправил выше. Также, личная боль,
// без типизации надо держать в голове все типы, чтобы правильно их использовать, ведь IDE не подскажет.
// при написании на TS же, IDE становится полезной и всегда поможет и подскажет, что именно должно передаваться в функцию/храниться в объекте