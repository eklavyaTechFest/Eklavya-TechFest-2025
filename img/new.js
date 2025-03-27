const students = [
    { name: "Alice", age: 22, major: "Computer Science", courses: ["CS101", "CS102"] },
    { name: "Bob", age: 20, major: "Physics", courses: ["PH101", "PH102"] },
    { name: "Charlie", age: 21, major: "Mathematics", courses: ["MA101", "MA102"] }
];

function displayStudents() {
    const studentList = document.getElementById('studentList');
    students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');
        studentDiv.innerHTML = `
            <h2>${student.name}</h2>
            <p>Age: ${student.age}</p>
            <p>Major: ${student.major}</p>
            <p>Courses: ${student.courses.join(", ")}</p>
        `;
        studentDiv.addEventListener('click', () => alert(`You clicked on ${student.name}`));
        studentList.appendChild(studentDiv);
    });
}
