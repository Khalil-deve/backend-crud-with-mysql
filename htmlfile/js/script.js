// ====== Student Form Handler ======
const studentForm = document.getElementById('signupFormStudent');
if (studentForm) {
  studentForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    let valid = true;
    const fields = ['student_id_student', 'name', 'email'];

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
        student_id: document.getElementById('student_id_student').value.trim(),
        student_name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim()
      };
      console.log(userData);
      await submitForm('http://localhost:3000/form/contact', userData, 'Student registration');
    }
  });
}

// ====== Course Form Handler ======
const courseForm = document.getElementById('signupFormCourse');
if (courseForm) {
  courseForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    let valid = true;
    const fields = ['course_id_course', 'course_name', 'instructor_name'];

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
    });

    if (valid) {
      const courseData = {
        course_id: document.getElementById('course_id_course').value.trim(),
        course_name: document.getElementById('course_name').value.trim(),
        instructor_name: document.getElementById('instructor_name').value.trim(),
      };
      console.log(courseData);
      await submitForm('http://localhost:3000/form/course', courseData, 'Course registration');
    }
  });
}

// ====== Enrollment Form Handler ======
const enrollmentForm = document.getElementById('signupFormEnrollment');
if (enrollmentForm) {
  enrollmentForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    let valid = true;
    const fields = ['enrollment_id', 'student_id_enrollment', 'course_id_enrollment', 'grade'];

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
    });

    if (valid) {
      const enrollmentData = {
        enrollment_id: document.getElementById('enrollment_id').value.trim(),
        student_id: document.getElementById('student_id_enrollment').value.trim(),
        course_id: document.getElementById('course_id_enrollment').value.trim(),
        grade: document.getElementById('grade').value.trim()
      };
      console.log(enrollmentData);
      await submitForm('http://localhost:3000/form/enrollment', enrollmentData, 'Enrollment');
    }
  });
}

// ====== Universal Form Submitter Function ======
async function submitForm(endpoint, dataObject, actionName) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataObject)
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('flashMessage', `Success! ${actionName} completed.`);
      window.location.href = "index.html";
    } else {
      localStorage.setItem('flashMessage', `Error! ${actionName} failed.`);
      console.error('Error:', data.error);
    }
  } catch (err) {
    console.error(`Network Error during ${actionName}:`, err);
  }
}
