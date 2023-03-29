import { Person } from "./Person";
import { Job } from "./Job";

const person1 = new Person("loh");
const person2 = new Person("Van");
const person3 = new Person("работяга");

const dungeonMaster = new Job(300, "dungeon master");
const stonemason = new Job(300, "каменьщик");

person1.work(); //это строчка падает, потому что поле job не устанавливает в конструкторе. Выглядит как дыра

person1.job = stonemason;
person2.job = dungeonMaster;
person3.job = stonemason;

person2.work();
person1.work();
person3.work();

person1.job = dungeonMaster;
person2.job = stonemason;
person3.job = dungeonMaster;

person2.work();
person1.work();
person3.work();
