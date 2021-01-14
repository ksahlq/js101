function getGrade(lowest, score, highest) {
  let mean = (lowest + score + highest) / 3;
  console.log(mean);

  if (mean < 60) return 'F';
  else if (mean < 70) return 'D';
  else if (mean < 80) return 'C';
  else if (mean < 90) return 'B';
  else return 'A';
}

console.log(
  getGrade(5.7, 4.0, 3.0),
  getGrade(95, 90, 93),
  getGrade(50, 50, 95),
  getGrade(60, 60, 60),
  getGrade(70, 70, 70),
  getGrade(90, 90, 89)
);