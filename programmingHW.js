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
let compoundInterest = (amount, rate, years) =>
  amount + amount * (rate / 12) * (years * 12);
// initial amount
// • annual interest rate
// • number of years to compound
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));
