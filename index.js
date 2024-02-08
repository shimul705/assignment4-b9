function calculateMoney(ticketSale) {
  let savings = 0;
  if (0 <= ticketSale && typeof ticketSale == 'number') {
    savings = (ticketSale * 120) - (500 + (8 * 50));
    return savings;
  }

  else {
    return 'Invalid Number! Please enter number above or equal 0';
  }
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
console.log('=======================================');


// ==================================2==============================================

function checkName(name) {
  if (Array.isArray(name) || typeof name[0] !== 'string') {
    return "Invalid"
  }
  let nameCase = name.toLowerCase();
  nameCase = nameCase.trim();

  const nameLastLetter = nameCase.slice(-1);

  const nameCheckWith = ['a', 'y', 'e', 'i', 'o', 'u', 'w'];

  if (nameCheckWith.includes(nameLastLetter)) {
    return "It's a Good Name";
  }
  else {
    return "It's a Bad Name";
  }
}
console.log(checkName('Salman'));
console.log(checkName(' OISHE  '));
console.log(checkName('Jhankar'));
console.log(checkName(199));
console.log(checkName(['Rashed']));
console.log('=======================================');

// ==================================3======================================

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }
  const result = [];
  for (let i = 0; i < array.length; i++) {

    if (typeof array[i] === 'number' && array[i] !== null && !isNaN(array[i] && array[i] !== undefined)) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteInvalids(["1", { num: 2 }, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({ num: [1, 2, 3] }));
console.log('=======================================');

// ==================================4==================================

function password(obj) {
  if (Array.isArray(obj) || typeof obj !== 'object' || !obj.name || !obj.birthYear || obj.birthYear.toString().length !== 4 || typeof obj.birthYear !== 'number' || !obj.siteName) {
    return "invalid"
  }

  let uCaseSiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
  let UpdatedPassword = uCaseSiteName + '#' + obj.name + '@' + obj.birthYear;
  return UpdatedPassword;
}


console.log(password({ name: 'kolimuddin', birthYear: 1999, siteName: 'google' }));
console.log(password({ name: 'rahat', birthYear: 2002, siteName: 'Facebook' }));
console.log(password({ name: 'toky', birthYear: 200, siteName: 'Facebook' }));
console.log(password({ name: 'maisha', birthYear: 2002 }));

console.log('=======================================');

// ==================================5==================================


function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr)) {
    return "invalid input! First parameter is not array"
  } else if (typeof livingCost !== 'number') {
    return "invalid input! Second parameter is not Number"
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

  let TotalSavings = 0;
  TotalSavings = AllPayments - livingCost;

  if (TotalSavings >= 0) {
    return TotalSavings;
  }
  else if (TotalSavings < 0) {
    return "Earn More!"
  }
  else {
    return "Invalid"
  }

}
console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
console.log('=======================================');
