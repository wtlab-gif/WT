import React, { useEffect, useState } from 'react';

function DeliveryStatus() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/delivery/1')  // Replace with dynamic order ID as needed
      .then(res => res.json())
      .then(data => setStatus(data.status));
  }, []);

  return (
    <div>
      <h2>Delivery Status</h2>
      <p>Status: {status}</p>
    </div>
  );
}

export default DeliveryStatus;
