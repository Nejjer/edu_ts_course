type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
//я его украл из исходников, но я понимаю, как он работает
//Мы с помощью Pick берем только те поля, который остались после типа Exclude
