// function calculateMoney(ticketSale) {
//   let savings = 0;
//   if (0 <= ticketSale) {
//     savings = (ticketSale * 120) - (500 + (8 * 50));
//     return savings;
//   }

//   else {
//     return 'Invalid Number! Please enter number above or equal 0';
//   }
// }

// const result = calculateMoney(10);
// console.log(result);

// ==================================2==============================================

// function checkName(name) {
//   //write your code here
//   // name = 5484;
//   // if (typeof name !== 'string' || name === 'typeof') {
//   //   return "invalid";
//   // }
//   if (Array.isArray(name) || typeof name[0] !== 'string') {
//     return "Invalid"
//   }

//   // console.log(typeof name);
//   let nameCase = name.toLowerCase();
//   // console.log(nameCase);
//   nameCase = nameCase.trim();

//   const nameLastLetter = nameCase.slice(-1);
//   // console.log(nameLastLetter);

//   const nameCheckWith = ['a', 'y', 'e', 'i', 'o', 'u', 'w'];

//   if (nameCheckWith.includes(nameLastLetter)) {
//     return "It's a Good Name";
//   }
//   else {
//     return "It's a Bad Name";
//   }
// }
// console.log(checkName(['Rashed']));

// ==================================3======================================

// function deleteInvalids(array) {
//   if (!Array.isArray(array)) {
//     return "Invalid Array";
//   }
//   const result = [];
//   for (let i = 0; i < array.length; i++) {

//     if (typeof array[i] === 'number' && array[i] !== null && !isNaN(array[i] && array[i] !== undefined)) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
// console.log(deleteInvalids(["1", { num: 2 }, NaN]));
// console.log(deleteInvalids([1, 2, -3]));
// console.log(deleteInvalids({ num: [1, 2, 3] }));

// ==================================4==================================

// function password(obj) {
//   //write your code here
//   if (!obj.name || !obj.birthYear || obj.birthYear.toString().length !== 4 || typeof obj.birthYear !== 'number' || !obj.siteName) {
//     return "invalid"
//   }

//   let uCaseSiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
//   // console.log(uCaseSiteName);
//   let UpdatedPassword = uCaseSiteName + '#' + obj.name + '@' + obj.birthYear;
//   return UpdatedPassword;
// }
// console.log(password({ name: 'kolimuddin', birthYear: 'hvjj', siteName: 'google' }));
// console.log(password({ name: 'kolimuddin', birthYear: 1999, siteName: 'google' }));
// console.log(password({ name: 'rahat', birthYear: 2002, siteName: 'Facebook' }));
// console.log(password({ name: 'toky', birthYear: 200, siteName: 'Facebook' }));
// console.log(password({ name: 'maisha', birthYear: 2002 }));

// ==================================5==================================


function monthlySavings(arr, livingCost) {

  // You have to write your code here
  if (!Array.isArray(arr) || typeof livingCost !== 'number') {
    return 'invalid input'
  }
  let AllPayments = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 3000) {
      AllPayments += arr[i] * 0.8;
    }
    else {
      AllPayments += arr[i];
    }
  }
  // console.log(AllPayments);
  let TotalSavings = 0;
  TotalSavings = AllPayments - livingCost;

  if (TotalSavings >= 0) {
    return TotalSavings;
  }
  else if (TotalSavings < 0) {
    return "Earn More!"
  }
  else{
    return "Invalid"
  }

}
console.log(monthlySavings([1000, 7000, 100, 350], 50000));
// console.log(livingCost);
// console.log(savings);
// console.log(income);