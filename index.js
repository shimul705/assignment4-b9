function calculateMoney(ticketSale) {
  if (0<=ticketSale) {
    savings = (ticketSale * 120)-(500+(8*50));
    return savings
    console.log("Baker vai er taka ache:" , savings);
  }
  else{
    console.log("Invalid input");
  }

  }

  calculateMoney(10);