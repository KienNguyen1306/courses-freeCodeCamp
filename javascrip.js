// Comment Your JavaScript Code
/*Hey*/

// Đổi độ C sang độ F
function ConVertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  console.log(fahrenheit);
  return fahrenheit;
}
ConVertCtoF(30);

// Đảo ngược một chuỗi
function ReverseString(string) {
  let reversedStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedStr += string[i];
  }
  console.log(reversedStr);
}

ReverseString("hello");

//Thừa số một số
// 5! = 1*2*3*4*5

function Factorialize(number) {
  let res = 1;
  for (let i = 2; i <= number; i++) {
    res *= i;
  }
  console.log("res", res);
  return res;
}

Factorialize(12);

//Tìm từ dài nhất trong một chuỗi
function FindLongestWordLength(string) {
  let words = string.split(" ");
  console.log("words", words);
  let max = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > max) {
      max = words[i].length;
    }
  }
  console.log("max length", max);
  return max;
}
FindLongestWordLength("The quick brown fox jumped over the lazy dog");

//Trả về số lớn nhất trong mảng
function largestOfFour(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    let maxNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > maxNumber) {
        maxNumber = arr[i][j];
      }
    }
    res[i] = maxNumber;
  }

  console.log(res);
}

largestOfFour([
  [8, 5, 9, 3],
  [143, 247, 18, 26],
  [342, 735, 837, 839],
  [10400, 1001, 857, 1],
]);

//Kt một chuỗi có kết thúc bằng target hay không.

function confirmEnding(str, target) {
  let res = str.slice(str.length - target.length) === target;
  console.log("res", res);
  return res;
}

confirmEnding("He has to give me a new name", "name");

//Lặp lại một chuỗi đã cho str) trong num nhiều lần
//repeatStringNumTimes("*", 3)nên trả lại chuỗi ***
function repeatStringNumTimes(string, num) {
  let res = "";
  for (let i = 0; i < num; i++) {
    res += string;
  }
  console.log("res", res);
}
repeatStringNumTimes("cdsd", 3);

//Cắt ngắn str nếu nó dài hơn độ dài str tối đa num. Trả về chuỗi bị cắt ngắn có ...kết thúc
//truncateString("A-", 1)nên trả lại chuỗi A....
//truncateString("Peter Piper", 11)nên trả lại chuỗi Peter Piper
function trimString(str, num) {
  if (str.length > num) {
    let res = str.slice(0, num) + "...";
    console.log("res", res);
  } else {
    console.log("res", str);
  }
}

trimString("nguyen duc kien", 5);

//findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) return 8.
//findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) return undefined.
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}
let res = findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0);
console.log(res);

//Kt xem một giá trị có phải là  boolean hay không
function booWho(bool) {
  let res = typeof bool === "boolean";
  console.log(res);
}
booWho("a");

// in hoa chữ cái đầu mỗi từ
function TitleCase(string) {
  const newArr = string.split(" ");
  console.log(newArr);
  const updatArr = [];
  for (let i in newArr) {
    console.log("i", i);
    updatArr[i] = newArr[i][0].toUpperCase() + newArr[i].slice(1).toLowerCase();
  }
  console.log("upload", updatArr);
  return updatArr.join(" ");
}
TitleCase("Im a little tea pot");

//bouncer([7, "ate", "", false, 9]) return  [7, "ate", 9].
//bouncer([false, null, 0, NaN, undefined, ""]) return [].
function bouncer(arr) {
  const resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      resArr.push(arr[i]);
    }
  }
  console.log(resArr);
  return filteredArr;
}
bouncer([7, "ate", "", false, 9]);

//getIndexToIns([1,2,3,4], 1.5)  return vị trí 1
//getIndexToIns([20,3,5], 19) return vị trí 2
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  console.log("aray ", arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}



//chunkArrayInGroups(["a", "b", "c", "d"], 2) return [["a", "b"], ["c", "d"]]
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) return  [[0, 1, 2], [3, 4, 5]]
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}