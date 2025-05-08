document.getElementById('passportForm').addEventListener('submit', function (e) {
    const email = this.email.value.trim();
    const phone = this.phone.value.trim();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      e.preventDefault();
      return;
    }
  
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a 10-digit phone number.');
      e.preventDefault();
      return;
    }
  });
  