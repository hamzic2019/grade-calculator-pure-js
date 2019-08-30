// Grade Calculator developed with pure JS
// A 90 - 100; B 80 - 89; C 70 - 79; D 60 - 69; F 0 - 59

let gradeCalculator = function(grade, maxPossibleGrade) {
  let gradeLetter = '';
  let gradePercentage = (grade / maxPossibleGrade) * 100;

  if (gradePercentage >= 90) {
    gradeLetter = 'A';
  }else if (gradePercentage >= 80 && gradePercentage <= 89) {
    gradeLetter = 'B';
  }else if (gradePercentage >= 70 && gradePercentage <= 79) {
    gradeLetter = 'C';
  }else if (gradePercentage >= 60 && gradePercentage <= 69) {
    gradeLetter = 'D';
  }else {
    gradeLetter = 'F';
  }

  return `You've scored ${gradePercentage}% on test, and your grade is ${gradeLetter}`;

}

console.log(gradeCalculator(25, 25))
