// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to save user data as cookies
function saveUserData() {
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;

    setCookie('username', userName, 7); // Cookie expires in 7 days
    setCookie('useremail', userEmail, 7); // Cookie expires in 7 days
}

// Function to retrieve user data from cookies
function retrieveUserData() {
    const username = getCookie('username');
    const useremail = getCookie('useremail');

    if (username && useremail) {
        document.getElementById('welcomeMessage').innerText = `Hello ${username}! Your email is ${useremail}.`;
    } else {
        document.getElementById('welcomeMessage').innerText = "No user data found.";
    }
}

// Event listener for the contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    saveUserData();
    alert('Form submitted! Welcome ' + document.getElementById('name').value);
});

// Call the retrieveUserData function when the page loads
window.onload = retrieveUserData;
