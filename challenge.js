console.log("================================");

// challenge 1
// create a boolean 'myBoolean' and set to 'true'
const myBoolean = true;

// challenge 2
// create a string 'myString' and set to 'nguyen duc kien'
const myString = "nguyen duc kien";

// challenge 3
// create a number 'firstNumber1' and set to '10'
const firstNumber1 = 10;
const secondNumber = 10;

// challenge 4
// create a Array 'myBoolean' and 'myString'
const myArray1 = [myBoolean, myString];

// challenge 5
// create a Object myObject
const myObject = {
  firstProperty: myArray1,
  sumProperty: firstNumber1 + secondNumber,
};

// challenge 6
// const numberVariable = 0;
//fix
let numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log("numberVariable", numberVariable);

// challenge 7
const firstNumber = 30;
const secondnumber = "30";

const resss = firstNumber === secondnumber; // === kt kiểu dữ liệu và giá trị
console.log("res", resss);

// challenge 8
const expression1 = 100 % 50; // 0
const expression2 = 100 / 50; // 2
const expression3 = expression1 < expression2; // true
const expression4 = expression3 && 300 + 5 === 305; //true
const expression5 = !expression4; //false

console.log("expression5", expression5);

// challenge 9
const myObj = {
  prop1: "first value",
  prop2: 20,
};

const myArry = [40, 50, 2];
const result = myObj.prop2 === myArry[0] / myArry[2]; // 20 === 40 /2
console.log("challenge 4", result);

// challenge 10

const myObj2 = {
  nestedObject1: {
    price: 100,
    qty: 5,
  },
  nestedObject2: {
    price: 100,
    qty: 3,
  },
};

const myArry1 = [myObj2.nestedObject1, myObj2.nestedObject2]; // [{price:100;qty:5},{price:100;qty:3}]
const res1 =
  myArry1[0].price * myArry1[0].qty > myArry1[1].price * myArry1[1].qty; // 100 * 5 > 100*3

console.log("challenge 5", res1); // true

// challenge 11 This code does not execute properly. Try to figure out why.
function multiply(a, b) {
  //   a * b;
  return a * b;
}

// The function is not returning the correct values. Can you figure out why?

function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;

    case 3:
      name = "Earth";
      break;

    case 4:
      name = "Mars";
      break;

    case 5:
      name = "Jupiter";
      break;

    case 6:
      name = "Saturn";
      break;

    case 7:
      name = "Uranus";
      break;

    case 8:
      name = "Neptune";
      break;
  }

  return name;
}

// đảo ngược chuỗi
function solution(str) {
  let array = str.split("");
  return array.reverse().join("");
}

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
let kk = evenOrOdd(2);
console.log(kk);

// [true,  true,  true,  false] return 'There are 3 sheeps in total'

function countSheeps(arrayOfSheep) {
  let sum = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      sum++;
    }
    [i];
  }
  console.log(sum);
  return sum;
}

// Return the number (count) of vowels in the given string.
//getCount("abracadabra") return 5
function getCount(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (!res.includes(str[i])) {
      res += str[i];
    }
  }
  console.log(res.length);
  return res.length;
}

getCount("hkhkjhkd");

//Tạo hàm kiểm tra xem một số n có chia hết cho hai số x AND y hay không.
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y == 0) {
    return true;
  } else {
    return false;
  }
}
let cc = isDivisible(3, 1, 3);
console.log(cc);

//makeNegative(1);    // return -1
// makeNegative(-5);   // return -5

function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return num * -1;
  }
}

//Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args[0];
    for (let i = 1; i < args.length; i++) {
      if (args[i] < min) {
        min = args[i];
      }
    }
    return min;
  }
}

// tính tổng từ 1 đến num
var summation = function (num) {
  // Code here
  let res = 0;
  for (let i = 0; i <= num; i++) {
    res += i;
  }
  return res;
};

// tính điểm trung bình mảng
//getAverage([2,2,2,2]) return 2
function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  console.log("sum", sum);
  return Math.floor(sum / marks.length);
}

// removeChar('eloquent'), 'loquen')
//removeChar('country'), 'ountr');

function removeChar(str) {
  console.log(str.slice(1, str.length - 1));
}

removeChar("eloquent");

//[1,-4,7,12] => 1 + 7 + 12 = 20
function positiveSum(arr) {
  let sum = 0;
  for (let i of arr) {
    if (i > 0) {
      sum += i;
    }
  }
  console.log("sum", sum);
  return sum;
}
positiveSum([1, -4, 7, 12]);

//('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
function basicOp(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "error";
  }
}
let yu = basicOp("+", 4, 7);
console.log(yu);

//6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  let res = "";
  for (let i = 0; i < n; i++) {
    res += s;
  }
  console.log(res);
  return res;
}
repeatStr(6, "I");

//"Robin Singh" ==> ["Robin", "Singh"]

function stringToArray(string) {
  return string.split(" ");
}

//noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB')
function noSpace(x) {
  let res = "";
  for (let i of x) {
    if (i !== " ") {
      res += i;
    }
  }
  console.log(res);
  return res;
}
noSpace("8 j 8   mBliB8g  imjB8B8  jl  B");

//[1, 2, 3] --> [2, 4, 6]
function maps(x) {
  return x.map((re) => re * 2);
}

// hero(10, 5), true)
//hero(7, 4), false)
function hero(bullets, dragons) {
  //Get Coding!
  if (bullets >= dragons * 2) {
    return true;
  }
  return false;
}

// sum two array arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
//arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
function sumArray(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
}

function arrayPlusArray(arr1, arr2) {
  return sumArray(arr1) + sumArray(arr2);
}

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")

function createPhoneNumber(numbers) {
  if (numbers.length !== 10) {
    return "error";
  }

  const area = numbers.slice(0, 3).join("");
  const first = numbers.slice(3, 6).join("");
  const second = numbers.slice(6, 10).join("");

  return `(${area}) ${first}-${second}`;
}
