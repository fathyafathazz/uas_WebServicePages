function submitRegistration(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const registrationData = {
        username: username,
        password: password
    };

    fetch('https://130.162.195.228/mhs714220012/register', { // Sesuaikan URL endpoint sesuai kebutuhan
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            Swal.fire({
                icon: 'success',
                title: 'Registration Successful!',
                text: 'Please click OK to proceed to Login.',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'index.html'; // Redirect to login page
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed!',
                text: data.message || 'Please try again.'
            });
        }
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Registration Failed!',
            text: error.message || 'Please try again.'
        });
    });
}