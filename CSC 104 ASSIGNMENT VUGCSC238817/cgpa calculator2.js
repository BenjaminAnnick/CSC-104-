let courses = []; // Array to store course details

function addCourse() {
  const courseName = document.getElementById("course").value;
  const credits = parseFloat(document.getElementById("credits").value);
  const grade = document.getElementById("grade").value;

  courses.push({ name: courseName, credits: credits, grade: grade }); // Add course object to array

  const courseList = document.getElementById("courses");
  courseList.innerHTML += `* ${courseName} (${credits} credits, Grade: ${grade})<br>`; // Display course details

  // Enable CGPA button only after adding at least one course
  const calculateButton = document.querySelector("button[onclick='calculateCGPA()'");
  calculateButton.disabled = courses.length === 0;

  // Clear input fields for next course
  document.getElementById("course").value = "";
  document.getElementById("credits").value = "";
}

function calculateCGPA() {
  let totalQualityPoints = 0;
  let totalCredits = 0;

  for (const course of courses) {
    totalQualityPoints += calculateQualityPoints(course.grade) * course.credits;
    totalCredits += course.credits;
  }

  const cgpa = totalQualityPoints / totalCredits;
  const cgpaDisplay = document.getElementById("cgpa");
  cgpaDisplay.textContent = `CGPA: ${cgpa.toFixed(2)}`;
}

function calculateQualityPoints(grade) {
  switch (grade) {
    case "A":
      return 4;
    case "B":
      return 3;
    case "C":
      return 2;
    case "D":
      return 1;
    default:
      return 0;
  }
}