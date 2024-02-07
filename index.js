function calculateMoney(ticketSale) {
  let savings = 0;
  if (0 <= ticketSale) {
    savings = (ticketSale * 120) - (500 + (8 * 50));
    return savings
  }

  else {
    return 'Invalid Number! Please enter number above or equal 0'
  }
}

const result = calculateMoney(10);
console.log(result);
