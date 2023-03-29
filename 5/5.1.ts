type Aging<T> = {
  age: number;
} & T;

type Person = Aging<{
  name: string;
}>;

type Bridge = Aging<{
  city: string;
}>;

type Wine = Aging<{
  manufacturer: string;
  grade: string;
}>;

function getOldest<T>(items: Aging<T>[]): Aging<T> {
  return items.sort((a, b) => b.age - a.age)[0];
}

const persons: Person[] = [
  {
    name: "igor",
    age: 12,
  },
  {
    name: "12",
    age: 2222,
  },
  {
    name: "1212",
    age: 222,
  },
];

console.log(getOldest(persons)); //больше примеров мне создавать лень:(
