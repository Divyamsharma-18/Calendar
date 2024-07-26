function updateCalendar() {
    const today = new Date();
    const date = today.getDate();
    const day = today.toLocaleString('default', { weekday: 'long' });
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();

    document.getElementById('date').textContent = date;
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
    document.getElementById('year').textContent = year;
}

// Update the calendar when the page loads
window.onload = updateCalendar;
