type House = {
  street: string;
  apartmentCount: number;
  buildInfo: {
    year: number;
    material: string;
  };
};

function getHouse(): House {
  return {
    street: "Pushkina",
    apartmentCount: 76,
    buildInfo: {
      year: 1996,
      material: "rocks",
    },
  };
}

function handleHouse(): void {
  const house: House = getHouse();

  console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
  console.log(
    `build in ${house.buildInfo.year}, build from ${house.buildInfo.material} `
  );
}

handleHouse();
//Ошибки возникали из-за ключевого слова as, которое хардкодит тип. as используется редко, и всегда не поощрается на ревью.
//Для исправления ошибки, я оставил указания типа у функции и без создания переменной, сразу вернул объект. В этом случае
//ошибки типа покажутся до компиляции
