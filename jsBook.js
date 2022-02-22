/*
check the number prime or not
*/
function testPrime(number) {
  let isPrime = false;
  if (number >= 1) {
    for (let i = 2; i < number; i++) {
      let res = 0;
      if (number % i === 0) {
        return isPrime;
      }
    }
  } else {
    alert("enter intiger only");
  }
  return true;
}
console.log(testPrime(7));

let x = 10;
function main() {
  let x = 0;

  console.log("x1 is " + x);

  x = 20;

  console.log("x2 is " + x);

  if (x > 0) {
    x = 30;
    console.log("x3 is " + x);
  }

  console.log("x4 is " + x);

  function f(x) {
    console.log("x5 is " + x);
  }

  f(50);

  console.log("x6 is " + x);
}
main();
console.log("x7 is " + x);
//Draw the scope chain

/*
Rewrite the “Switch” into an “if”
*/
// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");
// }

let message = +alert("Okay we support these browsers too");
if (browser === "Edge") {
  alert("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  message;
} else {
  alert("We hope that this page looks ok!");
}

/*
 Rewrite “if” into “switch”
 */
// let a = +prompt("a?", "");

// if (a == 0) {
//   alert(0);
// }
// if (a == 1) {
//   alert(1);
// }

// if (a == 2 || a == 3) {
//   alert("2,3");
// }

let a = +prompt("a?", "");
switch (a) {
  case a == 0:
    alert(0);
    break;
  case a == 1:
    alert(1);
    break;
  case a == 2 || a == 3:
    alert("2,3");
    break;
  default:
    alert("Wrong input!!!");
}

/*
Rewrite the function using '?' or '||'
The following function returns true if the parameter age is greater than 18.
*/
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }
let checkAge = function (age) {
  return age > 18 ? true : confirm("Did parents allow you?");
};
console.log(checkAge(17));

let checkAge1 = (age) => age > 18 || confirm("Did parents allow you?");
console.log(checkAge1(19));

/*
Function min(a,b)
Write a function min(a,b) which returns the least of two numbers a and b.
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/
let minNumber = (a, b) => {
  if (a > b) return a;
  return b;
};
console.log(minNumber(0, 1));

/*
Function pow(x,n)
Write a function pow(x,n) that returns x in power n. Or, in other words, 
multiplies x by itself n times and returns the result
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
*/
let pow = (x, n) => (x *= x * n);
console.log(pow(2, 4));
