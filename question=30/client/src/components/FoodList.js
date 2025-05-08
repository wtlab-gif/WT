import React, { useEffect, useState } from 'react';

function FoodList() {
  const [foods, setFoods] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/foods')
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);

  const toggleSelect = (id) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const placeOrder = () => {
    const items = foods.filter(f => selected.includes(f.id));
    fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items })
    })
      .then(res => res.json())
      .then(data => {
        alert(`Order Placed! Order ID: ${data.id}`);
        setSelected([]);
      });
  };

  return (
    <div>
      <h2>Available Foods</h2>
      <ul>
        {foods.map(food => (
          <li key={food.id}>
            <label>
              <input
                type="checkbox"
                checked={selected.includes(food.id)}
                onChange={() => toggleSelect(food.id)}
              />
              {food.name} - ${food.price}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={placeOrder} disabled={selected.length === 0}>
        Place Order
      </button>
    </div>
  );
}

export default FoodList;
