document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const rating = parseInt(this.rating.value);
    const comments = this.comments.value.trim();
  
    if (name === '' || email === '' || comments === '') {
      alert('Please fill all fields!');
      e.preventDefault();
      return;
    }
  
    if (rating < 1 || rating > 5) {
      alert('Rating must be between 1 and 5');
      e.preventDefault();
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      e.preventDefault();
    }
  });
  
  