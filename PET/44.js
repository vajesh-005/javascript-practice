// You have an array of 5 objects, each representing a student with properties name and grade.
//  Write a program to find and print the name of the student whose grade is "A".

let students = [
    { name: "Amar", grade: "A" },
    { name: "Akbar", grade: "B" },
    { name: "Anthony", grade: "A" },
  ]
  for(let i=0;i<students.length;i++){
    if(students[i].grade==="A"){
        console.log(students[i].name);
    }
  }