import React from 'react';

const Wallet = () => {
  const customersWallet = [
    {
      name: 'Mike',
      amount: 5000,
      walletID: 1111,
    },
    {
        name: 'James',
        amount: 3000,
        walletID: 1112,
    },
    {
        name: 'John',
        amount: 10000,
        walletID: 1113,
    },
  ];

    const buyPower = (who) => {
      const willBuy = customersWallet.find(
        (item) => item.amount <= who?.amount
      )?.type;
      
      prompt(
        willBuy
          ? who?.name + ', You have 5000' + willBuy
          : "Sorry, you can't afford the selected item"
      );
    };
    
  return {
    customersWallet,
    buyPower,
  };
};

export default Wallet