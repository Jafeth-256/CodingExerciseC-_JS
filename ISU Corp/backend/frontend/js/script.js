window.onload = function() {
    fetch('http://localhost:5290/api/users')
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById('user-list');
            userList.innerHTML = data.map(user => `<p>${user.name}</p>`).join('');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}