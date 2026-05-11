
function saveData() {
    const data = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,

    };

    const existing = JSON.parse(localStorage.getItem('enrollments') || '[]');
    existing.push(data);
    localStorage.setItem('enrollments', JSON.stringify(existing));
    alert("your data has been saved")
}