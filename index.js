"use strict";
let aString;
aString = "Hello";
let aNum;
aNum = 10;
let aBool;
aBool = false;
let anyVar = "a string";
anyVar = 5;
let year;
year = 2021;
year = "2021";
const parsedYear = parseInt(year);
let arrString = ["a", "b", "c"];
arrString[0] = "b";
arrString.push("e");
let arrNumber = [1, 2, 3];
arrNumber[0] = 2;
arrNumber.push(5);
let arrBool = [true, false];
arrBool[0] = false;
arrBool.push(true);
let arrMix = [1, "a", true];
arrMix[0] = "b";
arrMix.push("true");
let arrTup = ["a string", 5];
arrTup = ["string", 1];
let person = {
    name: "Klajdi",
    age: 25,
};
person.name = "jesse";
// function calcSum(a: number, b: number): number {
//   return a + b;
// }
// calcSum(2, 2);
let calcSum;
calcSum = (first, second) => {
    return first + second;
};
calcSum(2, 2, 2);
const sayHi = () => {
    console.log("Hi");
};
let mike = {
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
const inputName = document.querySelector("#name");
const inputAge = document.querySelector("#age");
const inputForm = document.querySelector("form");
const greeting = document.querySelector(".greeting");
inputName.value;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
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
function doSomething(arg) {
    return arg;
}
doSomething("3");
const aBook = {
    id: 1,
    name: "Title 1",
    data: "more data here",
};
const bBook = {
    id: 2,
    name: "Title 2",
    data: ["Review 1", "Review 2"],
};
var ManufacturerMake;
(function (ManufacturerMake) {
    ManufacturerMake[ManufacturerMake["TESLA"] = 0] = "TESLA";
    ManufacturerMake[ManufacturerMake["AUDI"] = 1] = "AUDI";
    ManufacturerMake[ManufacturerMake["MERCEDES"] = 2] = "MERCEDES";
    ManufacturerMake[ManufacturerMake["VOLVO"] = 3] = "VOLVO";
    ManufacturerMake[ManufacturerMake["BMW"] = 4] = "BMW";
})(ManufacturerMake || (ManufacturerMake = {}));
const myCar = {
    year: 2021,
    make: ManufacturerMake.BMW,
};
console.log(myCar.make);
