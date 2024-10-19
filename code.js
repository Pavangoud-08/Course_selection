document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for courses and teachers
    const courses = ['Data Structures', 'Algorithms', 'Operating Systems', 'Database Management', 'Software Engineering'];
    const teachers = [
        { name: 'Dr. Smith', rating: 4.5, projects: 10, patents: 3, background: 'PhD in Computer Science' },
        { name: 'Dr. Johnson', rating: 4.2, projects: 8, patents: 1, background: 'PhD in Mathematics' },
        { name: 'Dr. Williams', rating: 4.8, projects: 12, patents: 5, background: 'PhD in Software Engineering' },
        { name: 'Dr. Brown', rating: 4.3, projects: 9, patents: 2, background: 'PhD in Information Technology' },
        { name: 'Dr. Davis', rating: 4.6, projects: 11, patents: 4, background: 'PhD in Data Science' }
    ];

    // Populate course options
    const courseSelects = document.querySelectorAll('select[id^="theory-course-"], select[id^="lab-course-"]');
    courseSelects.forEach(select => {
        courses.forEach(course => {
            const option = document.createElement('option');
            option.value = course;
            option.textContent = course;
            select.appendChild(option);
        });
    });

    // Populate teacher options
    const teacherSelects = document.querySelectorAll('select[id$="-teacher"], #teacher-feedback');
    teacherSelects.forEach(select => {
        teachers.forEach(teacher => {
            const option = document.createElement('option');
            option.value = teacher.name;
            option.textContent = teacher.name;
            select.appendChild(option);
        });
    });

    // Display teacher profiles
    const teacherList = document.getElementById('teacher-list');
    teachers.forEach(teacher => {
        const profile = document.createElement('div');
        profile.className = 'teacher-profile';
        profile.innerHTML = `
            <h3>${teacher.name}</h3>
            <p>Rating: ${teacher.rating}</p>
            <p>Projects: ${teacher.projects}</p>
            <p>Patents: ${teacher.patents}</p>
            <p>Background: ${teacher.background}</p>
        `;
        teacherList.appendChild(profile);
    });

    // Handle form submissions
    document.getElementById('course-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle course form submission logic
        alert('Courses submitted successfully!');
    });

    document.getElementById('feedback-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle feedback form submission logic
        alert('Feedback submitted successfully!');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Other initialization code...

    // Handle form submissions
    document.getElementById('course-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather student information
        const studentName = document.getElementById('student-name').value;
        const studentID = document.getElementById('student-id').value;
        const semester = document.getElementById('semester').value;

        // Gather selected courses
        const selectedCourses = [];
        for (let i = 1; i <= 4; i++) { // Theory Courses
            const course = document.getElementById(`theory-course-${i}`).value;
            if (course) selectedCourses.push(course);
        }
        for (let i = 1; i <= 2; i++) { // Lab Courses
            const labCourse = document.getElementById(`lab-course-${i}`).value;
            if (labCourse) selectedCourses.push(labCourse);
        }

        // Store data in localStorage
        localStorage.setItem('studentName', studentName);
        localStorage.setItem('studentID', studentID);
        localStorage.setItem('semester', semester);
        localStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));

        // Navigate to the summary page
        window.location.href = 'summary.html'; // Change to your summary page URL
    });
});

