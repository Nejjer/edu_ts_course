export type User = {
  name: string;
  age: number;
  occupation: string; //возможно нужно выделить отдельный тип occupation, но нет внятности в ТЗ, ограниченное ли это значение
};

export const users: User[] = [
  {
    name: "Roman Abramov",
    age: 25,
    occupation: "Millionaire",
  },
  {
    name: "Andrey Fox",
    age: 23,
    occupation: "Developer",
  },
];

export function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);
