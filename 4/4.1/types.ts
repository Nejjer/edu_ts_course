export interface IUser {
  countMessages: number;
  countWarning: number;
  registrationDate: number; //использую number, а не Date, потому что с сервера почти всегда возвращается время в виде числа
}
