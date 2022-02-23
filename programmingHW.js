/* #1
Write a function, computeSalesCommission that takes a Boolean 
argument for salaried and number argument for salesAmount. 
It should return the sales commission based on following
rules. First make a defining table for the function
*/
let computeSalesCommission = (salaried, salesAmount) => {
  let salesCommission = 0;
  // If the salesman is salaried then
  if (salaried === true) {
    // • These is no commission for sales below $300
    if (salesAmount < 300) {
      salesCommission;
    }
    // • 1% for sales between $300 and $500 (inclusive, and commission on the entire amount)
    else if (salesAmount >= 300 && salesAmount <= 500) {
      salesCommission += salesAmount * 0.01;
    }
    // • 2% for sales above $500 (only for the portion above 500 plus the 1% commission on the
    // first 500)
    else if (salesAmount > 500) {
      salesCommission += (salesAmount - 500) * 0.02 + 500 * 0.01;
    }
  }
  // • If the salesman is not salaried then
  else {
    // • no commission for sales below $300
    if (salesAmount < 300) {
      salesCommission;
      // • 2% for sales between $300 and $500 (inclusive, and commission on the entire amount)
    } else if (salesAmount >= 300 && salesAmount <= 500) {
      salesCommission += salesAmount * 0.02;
    } else {
      // • 3% for sales above $500 (only for the portion above 500 plus the 2% commission
      // on the first 500)
      salesCommission += (salesAmount - 500) * 0.03 + 500 * 0.02;
    }
  }
  return salesCommission;
};
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));

/* #2
Make a defining table and function that will return the balance of a savings account that
compounds interest monthly. Parameters for the function will be:
*/
let compoundInterest = (amount, rate, years) => {
  let balance = 0;

  for (let i = 0; i < years * 12; i++) {
    amount += amount * (rate / 12 / 100);
  }
  return amount;
};

// • initial amount
// • annual interest rate
// • number of years to compound
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));

/* #3
Cost of House Down Payment
Make a defining table and then write a function that calculates down payment for a home loan based on
following rules. Your function should have a parameter for the cost and return the down payment
amount.
Cost of House             Down Payment
$0 to less than 50K     -  5% of the cost
$50K to less than 100K  -  $2500 + 10% of (cost - $50K)
$100K to less than 200K -  $7500 + 15% of (cost - $100K)
$200K and above         -  $20000 + 10% of (cost - $200K)
*/
const calcDownpayment = (cost) => {
  let downpayment = 0;
  if (cost < 50000) {
    downpayment = cost * 0.05;
  } else if (cost >= 50000 && cost < 100000) {
    downpayment += (cost - 50000) * 0.1 + 2500;
  } else if (cost >= 100000 && cost < 200000) {
    downpayment += (cost - 100000) * 0.15 + 7500;
  } else if (cost >= 200000) {
    downpayment += (cost - 200000) * 0.1 + 20000;
  }
  return downpayment;
};
console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));

/* #4
Write functions sumDigits and multDigits that take an integer parameter and return the sum or
product of the digits in the number. Use the / and % operators to find the digits.
Input       sumDigits Output      multDigits Output
1234        10                    24
102         3                     0
8           8                     8
*/
const sumDigits = (int) => {
  let arr = int.toString().split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return sum;
};
console.log(sumDigits(1234));
console.log(sumDigits(102));
console.log(sumDigits(8));

const multDigits = (n) => {
  let mult = 1;
  let fromNumberToArray = [...n.toString()].map(Number);
  for (let i = 0; i < fromNumberToArray.length; i++) {
    mult *= fromNumberToArray[i];
  }
  return mult;
};
console.log(multDigits(1234));
console.log(multDigits(102));
console.log(multDigits(8));

/* #5
Write a function, convertFahrenheit, that takes an input parameter with a temperature in Fahrenheit
and returns the temperature in Celsius.
*/
const convertFahrenheit = (f) => (celsius = (f - 32) / 1.8);
console.log("expect 0: ", convertFahrenheit(32));
console.log("expect -17.7778: ", convertFahrenheit(0));
console.log("expect 100: ", convertFahrenheit(212));
console.log("expect 37.7778: ", convertFahrenheit(100));

/* #6
Write a function that takes x and y co-ordinates of two points as inputs and returns the distance
between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
*/
// const calcDistance = (x, y, a, b) =>
//   Math.sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
// console.log("expect 7.07 : ", calcDistance(0, 0, 5, 5));
const calcDistance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};
console.log("expect 7.07 : ", calcDistance(0, 0, 5, 5));
