import React from 'react';
import OrderStatus from '../components/OrderStatus';
import DeliveryStatus from '../components/DeliveryStatus';
import PaymentStatus from '../components/PaymentStatus';

const Order = () => (
  <div>
    <h1>Your Order</h1>
    <OrderStatus />
    <DeliveryStatus />
    <PaymentStatus />
  </div>
);
export default Order;