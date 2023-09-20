let aString: string;
aString = "Hello";

let aNum: number;
aNum = 10;

let aBool: boolean;
aBool = false;

let anyVar: any = "a string";
anyVar = 5;

let year: stringOrNum;

year = 2021;
year = "2021";

const parsedYear = parseInt(year);

let arrString: string[] = ["a", "b", "c"];
arrString[0] = "b";
arrString.push("e");

let arrNumber: number[] = [1, 2, 3];
arrNumber[0] = 2;
arrNumber.push(5);

let arrBool: boolean[] = [true, false];
arrBool[0] = false;
arrBool.push(true);

let arrMix: (string | number | boolean)[] = [1, "a", true];
arrMix[0] = "b";
arrMix.push("true");

let arrTup: [string, number] = ["a string", 5];
arrTup = ["string", 1];

let person = {
  name: "Klajdi",
  age: 25,
};

person.name = "jesse";

type stringOrNum = string | number;

// function calcSum(a: number, b: number): number {
//   return a + b;
// }

// calcSum(2, 2);

let calcSum: (a: number, b: number, third?: number) => number;

calcSum = (first: number, second: number) => {
  return first + second;
};

calcSum(2, 2, 2);

const sayHi = () => {
  console.log("Hi");
};

interface PersonInterface {
  name: string;
  age: number;
}

let mike: PersonInterface = {
  name: "mike",
  age: 34,
};

// class Person implements PersonInterface {
//   private name: string;
//   age: number;
//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
//   greet() {
//     return `Hi, my name is ${this.name} and I am ${this.age}`;
//   }
// }

const inputName = document.querySelector("#name") as HTMLInputElement;
const inputAge = document.querySelector("#age") as HTMLInputElement;
const inputForm = document.querySelector("form")!;
const greeting = document.querySelector(".greeting") as HTMLDivElement;

inputName.value;

class Person implements PersonInterface {
  constructor(public name: string, public age: number) {}
  greet() {
    return `Hi, my name is ${this.name} and I am ${this.age}`;
  }
}

let john = new Person("John", 35);
console.log(john.greet);

inputForm.addEventListener("submit", e => {
  e.preventDefault();

  const person = new Person(inputName.value, inputAge.valueAsNumber);

  greeting.innerText = person.greet();

  inputForm.reset();
});

function doSomething<T>(arg: T): T {
  return arg;
}

doSomething<string>("3");

interface book<T> {
  id: number;
  name: string;
  data: T;
}

const aBook: book<string> = {
  id: 1,
  name: "Title 1",
  data: "more data here",
};

const bBook: book<string[]> = {
  id: 2,
  name: "Title 2",
  data: ["Review 1", "Review 2"],
};

enum ManufacturerMake {
  TESLA,
  AUDI,
  MERCEDES,
  VOLVO,
  BMW,
}

const myCar = {
  year: 2021,
  make: ManufacturerMake.BMW,
};

console.log(myCar.make);
