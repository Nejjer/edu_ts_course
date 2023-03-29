type Cat = {
  name: string;
  meow: () => string;
};

type Dog = {
  name: string;
  bark: () => string;
};

const cat: Cat = {
  name: "Pushok",
  meow: () => "meow!",
};

const dog: Dog = {
  name: "Bobik",
  bark: () => "bark!",
};

whatDoesThePetSay1(cat);
whatDoesThePetSay1(dog);

function whatDoesThePetSay1(pet: Dog | Cat): string {
  if () { //без изменения типов выше я так и не придумал, как проверить тут без in.
    return pet.bark();
  } else {
    return pet.meow();
  }
}

function whatDoesThePetSay2(pet: Dog | Cat): string {
  if (isCat(pet)) {
    return pet.meow();
  } else {
    return pet.bark();
  }
}

function isCat(obj: any): obj is Cat {
  return "meow" in obj;
}

function whatDoesThePetSay3(pet: Dog | Cat): string {
  if ("bark" in pet) {
    return pet.bark();
  } else {
    return pet.meow();
  }
}
//больше понравился in, потому что только он заработал)))
