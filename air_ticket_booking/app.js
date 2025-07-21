document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const namePattern = /^[A-Za-z ]+$/;
    const nameNoSpaces = name.replace(/\s+/g, '');
    if (!namePattern.test(name) || nameNoSpaces.length < 4 || nameNoSpaces.length > 16) {
        alert('Name must be 4-16 letters (excluding spaces) and contain only alphabets and spaces.');
        return;
    }

    const from = document.getElementById('from').value.trim();
    const to = document.getElementById('to').value.trim();
    const date = document.getElementById('date').value;
    const tickets = document.getElementById('tickets').value;

    if (!name || !from || !to || !date || !tickets || tickets < 1) {
        alert('Please fill in all fields correctly.');
        return;
    }

    // Save booking details to localStorage
    const booking = { name, from, to, date, tickets };
    localStorage.setItem('bookingReceipt', JSON.stringify(booking));

    // Redirect to receipt page
    window.location.href = 'receipt.html';
}); 