document.getElementById('signupForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent form submission
  
    let valid = true;
    const fields = ['registration', 'firstname', 'lastname', 'address', 'phone', 'email'];
  
    fields.forEach(field => {
      const input = document.getElementById(field);
      const error = input.nextElementSibling;
  
      if (!input.value.trim()) {
        error.textContent = 'This field is required.';
        error.style.display = 'block';
        valid = false;
      } else {
        error.textContent = '';
        error.style.display = 'none';
      }
  
      if (field === 'phone') {
        const phonePattern = /^\d{11}$/;
        if (!phonePattern.test(input.value.trim())) {
          error.textContent = 'Enter a valid 10-digit phone number.';
          error.style.display = 'block';
          valid = false;
        }
      }
  
      if (field === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value.trim())) {
          error.textContent = 'Enter a valid email address.';
          error.style.display = 'block';
          valid = false;
        }
      }
    });
  
    if (valid) {
        const userData = {
          registration: document.getElementById('registration').value.trim(),
          firstname: document.getElementById('firstname').value.trim(),
          lastname: document.getElementById('lastname').value.trim(),
          address: document.getElementById('address').value.trim(),
          phone: document.getElementById('phone').value.trim(),
          email: document.getElementById('email').value.trim()
        };
      
        console.log(userData); // Optional: view the object in console
      
        try {
          const response = await fetch('http://localhost:3000/form/contact', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json' // Sending JSON data
              },
              body: JSON.stringify(userData)// Convert JS object to JSON string
          })
          const data = await response.json(); // Parse JSON response
          if (response.ok) {
              console.log('Success:', data);
              // Store the flash message flag in localStorage
              localStorage.setItem('flashMessage', 'Success! Your SQL command executed successfully.');

              // ✅ Redirect to another page
              window.location.href = "index.html";  // or "/index.html" if in root
              console.log('the status code:', response.status);
          } else {

              localStorage.setItem('flashMessage', 'Error! Your SQL command failed.');
              // Handle errors here
              console.error('Error:', data.error);
          }
      } catch (err) {
          console.error('Error:', err);
      }

      //   // Now send this to the server
      //   fetch('http://localhost:3000/form/contact', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(userData)
      //   })
      //   .then(res => res.json())
      //   .then(data => {
      //     alert('Registration successful!');
      //     console.log(data);
      //   })
      //   .catch(err => {
      //     console.error('Error:', err);
      //     alert('An error occurred while submitting the form.');
      //   });
      }
      
  });
  