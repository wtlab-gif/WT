import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FoodList from './components/FoodList';
import OrderStatus from './components/OrderStatus';
import DeliveryStatus from './components/DeliveryStatus';
import PaymentStatus from './components/PaymentStatus';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">View Foods</Link></li>
            <li><Link to="/order-status">Order Status</Link></li>
            <li><Link to="/delivery-status">Delivery Status</Link></li>
            <li><Link to="/payment-status">Payment Status</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<FoodList />} />
          <Route path="/order-status" element={<OrderStatus />} />
          <Route path="/delivery-status" element={<DeliveryStatus />} />
          <Route path="/payment-status" element={<PaymentStatus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
