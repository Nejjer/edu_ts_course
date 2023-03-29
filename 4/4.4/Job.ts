export class Job {
  constructor(
    private readonly _salary: number,
    private readonly _role: string
  ) {}
  get salary() {
    return this._salary;
  }

  public work(personName: string) {
    console.log(`${personName} сейчас работает как ${this._role}`);
  }
}
