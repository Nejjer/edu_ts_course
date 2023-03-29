import { Job } from "./Job";

export class Person {
  private _job: Job;
  set job(job: Job) {
    this._job = job;
  }
  constructor(private readonly name: string) {} //по хорошему в конструктор передавать job, но в ТЗ такого явно нет, непонятно почему

  public getSalary() {
    return this._job.salary;
  }

  public work() {
    //к комментарию из index. Можно сделать тут проверку на наличие _job, но выглядит странно.
    //вообще я удивился, что ts не стал ругаться, что переменная _job может быть не инициализирована
    this._job.work(this.name);
  }
}
