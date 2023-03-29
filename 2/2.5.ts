const areEqual = (obj1: Record<string, any>, obj2: Record<string, any>) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2); //Вроде, это должно работать, не знаю зачем в подсказке инфа про keys
};
