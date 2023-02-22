/* */

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== ''); // remove empty lines
    const headers = lines[0].split(','); // get headers
    const students = lines.slice(1).map(line => line.split(',').map(field => field.trim())); // get students
    const countByField = {};
    headers.forEach(header => {
      const index = headers.indexOf(header);
      const studentsInField = students.filter(student => student[index] !== '');
      countByField[header] = studentsInField.length;
      console.log(`Number of students in ${header}: ${countByField[header]}. List: ${studentsInField.map(student => student[0]).join(', ')}`);
    });
    console.log(`Number of students: ${students.length}`);
  } catch (err) {
    console.error('Cannot load the database');
  }
}

countStudents('database.csv');

module.exports = countStudents;
