module.exports = {
    foods: [
      { id: 1, name: 'Pizza', price: 12 },
      { id: 2, name: 'Burger', price: 8 },
      { id: 3, name: 'Sushi', price: 15 }
    ],
    orders: [{ id: 1, status: 'Preparing' }],
    deliveries: [{ orderId: 1, status: 'On the way' }],
    payments: [{ orderId: 1, status: 'Paid' }]
  };
  