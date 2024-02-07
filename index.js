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

function checkName(name) {
  //write your code here
  const nameCase = name.toLowerCase();
  // console.log(nameCase);

  const nameLastLetter = nameCase.slice(-1);
  // console.log(nameLastLetter);
  if (typeof name !== 'string') {
    return "Invalid Input! Please Enter String only";
  }
  const nameCheckWith = ['a', 'y', 'e', 'i', 'o', 'u', 'w'];

  if (nameCheckWith.includes(nameLastLetter)) {
    return "It's a Good Name";
  }
  else {
    return "It's a Bad Name";
  }
}
console.log(checkName("Shimul"));