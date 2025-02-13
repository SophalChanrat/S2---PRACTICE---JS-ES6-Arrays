// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An", age: 20 },
  { firstName: "Bình", age: 22 },
  { firstName: "Cẩm", age: 21 },
  { firstName: "An", age: 19 }, // Duplicate first name!
];

/**
 * Updates or adds a student’s lastName and batch.
 * @param {string} firstName - The student's first name.
 * @param {string} lastName - The student's last name.
 * @param {string} batch - The batch year.
 * @param {number} age - The student's age.
 */
function updateStudentInfo(firstName, lastName, batch, age) {
  let student = STUDENTS_DATA.find(
    (s) => s.firstName === firstName && !s.lastName && !s.batch
  );

  if (student) {
    student.lastName = lastName;
    student.batch = batch;
    student.age = age;
  } else {
    STUDENTS_DATA.push({ firstName, lastName, batch, age });
  }
}

/**
 * Updates a student's age based on firstName, lastName, and batch.
 * @param {string} firstName - The student's first name.
 * @param {string} lastName - The student's last name.
 * @param {string} batch - The batch year.
 * @param {number} newAge - The new age to update.
 */
function updateStudentAge(firstName, lastName, batch, newAge) {
  let student = STUDENTS_DATA.find(
    (s) => s.firstName === firstName && s.lastName === lastName && s.batch === batch
  );

  if (student) {
    student.age = newAge;
  }
}

// Step 1: Add lastName and batch to students
updateStudentInfo("An", "Noy", "2025", 20);
updateStudentInfo("Bình", "Chilling", "2025", 22);
updateStudentInfo("Cẩm", "Tran", "2025", 21);
updateStudentInfo("An", "Banh", "2025", 19);

// Step 2: Update An Noy's age to 30
updateStudentAge("An", "Noy", "2025", 30);

// Print the updated data
console.log(STUDENTS_DATA);
