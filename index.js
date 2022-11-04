"use strict";
//1
let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};
console.log(user.studentstatus);
//2
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
let n = 0;
while (n < arr.length) {
  console.log(arr[n]);
  n++;
}
//3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let number of numbers) {
  if (number > 5) {
    console.log(number);
  }
}
//4
let user2 = {
  name: "giorgi",
  age: 20,
  studentstatus: "active",
};
if (user2.age < 18 && user2.studentstatus == "active") {
  console.log("hello");
} else if (user2.name == "levan") {
  console.log("hello Levan");
} else if (user2.studentstatus == "active" || user2.age < 25) {
  console.log("hello world");
} else {
  console.log("error");
}
//5
let array = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j] > 0) {
      console.log(array[i][j]);
    }
  }
}
//6
let array2 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
//even numbers
for (let i = 0; i < array2.length; i++) {
  if (array2[i] % 2 === 0) {
    console.log(array2[i]);
  }
}
//odd numbers
for (let i = 0; i < array2.length; i++) {
  if (array2[i] % 2 !== 0) {
    console.log(array2[i]);
  }
}
//7
function increment(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}
//8
let user3 = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};
function person(user) {
  if (user.isloggedin === true) {
    return user.firstname + " " + user.lastname;
  } else {
    return false;
  }
}
//9
function max(arr) {
  let maxNumber = 0;
  for (let elem of arr) {
    if (elem > maxNumber) {
      maxNumber = elem;
    }
  }
  return maxNumber;
}
//10
let array3 = [1, 2, 4, 10, 34, 5, 7, 87];
for (let elem of array3) {
  if (elem > 0 && elem < 10) {
    console.log(elem);
  }
}
//11
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers1) {
  if (number == 5) {
    break;
  }
}
