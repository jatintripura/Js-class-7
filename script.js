//Javascript object

// Array
const userArray = ["Jatin", "Tripura", 2001, "B.Sc in ECE"];
console.log(userArray);
console.log(userArray[1]);

//Object

const userObject = {
  fristName: "Jatin",
  lastName: "Tripura",
  brithYear: 2001,
  degreeName: "B.Sc in ECE",
};
console.log(userObject);

//bracket nottetion

console.log(userObject["degreeName"]);

//dot nottetion

console.log(userObject.degreeName);
console.log(userObject.brithYear);

//Add new item
//Example-1

userObject.dream = "Engineer";
console.log(userObject);
console.log(userObject.dream);

//Example-2

userObject["birthPlace"] = "Khagracharri";
console.log(userObject);
console.log(userObject["birthPlace"]);

//Another object example

const userObject_2 = {
  fristName: "Jatin",
  lastName: "Tripura",
  isStudent: true,
  calculateAge: function (brithYear) {
    return 2022 - brithYear;
  },
};
console.log(userObject_2.isStudent);
console.log(userObject_2.calculateAge(2001));
console.log(userObject_2["calculateAge"](2001));

//This keyword

const userObject_3 = {
  fristName: "Lioni",
  lastName: "Tripura",
  brithYear: 2004,
  isStudent: true,
  calculateAge: function () {
    return 2022 - userObject_3.brithYear;
  },
};
console.log(userObject_3.calculateAge());

const userObject_4 = {
  fristName: "Jatin",
  lastName: "Tripura",
  birthYear: 2001,
  isStudent: true,
  calculateAge: function () {
    return 2022 - this.brithYear;
  },
  userBio: function () {
    return `This is user ${this.fristName} ${this.lastName}, born in ${this.birthYear}`;
  },
};
console.log(userObject_4.calculateAge());

console.log(userObject_4.userBio());

//loop

console.log("Javascript");
console.log("Javascript");
console.log("Javascript");
console.log("Javascript");
console.log("Javascript");
console.log("Javascript");
console.log("Javascript");
console.log("Javascript");
console.log("Javascript");
console.log("Javascript");
console.log("Javascript");

// Using for loop

for (let Javascript = 1; Javascript <= 10; Javascript++) {
  console.log(`Javascript ${Javascript}`);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Bangladesh ${i}`);
}

// While loop
let task = 1;
while (task <= 10);
{
  console.log(`Task &{task}`);
  task++;
}

let i = 1;
while (i <= 10);
{
  console.log(`Task &{i}`);
  i++;
}

//Array

const myArray = ["Data_1", "Data_2", "Data_3", "Data_4", "Data_5", "Data_6"];
console.log(myArray);

//run with array
console.log(myArray.length);
for (let i = 0; i < 7; i++) {
  console.log(myArray[i]);
}
//forword position

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

//Backword position

for(let i=myArray.length-1; i>=0; i--){
    console.log(myArray[i]);
}

//loop break

for (let i = 0; i < myArray.length; i++) {
    if(i==5)
     break;
    console.log(myArray[i]);

  }

//loop continue ... like skip word

for (let i = 0; i < myArray.length; i++) {
    if(i==5)
    continue;
    console.log(myArray[i]);

  }

  const newArray = ["Data_1", "Data_2", "Data_3", "Data_4", "Data_5", "Data_6"];
  console.log(newArray);
  
//index of

console.log(myArray.indexOf("Data_1"));
console.log(myArray.indexOf("Data_9"));

//includes

console.log(myArray.includes("Data_1"));
console.log(myArray.includes("Data_9"));

console.log("Thank you");