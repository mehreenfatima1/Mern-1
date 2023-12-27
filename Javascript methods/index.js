console.log("Marksheet of Grade 9th")
var students = '[{"Rollno":1,"Name":"Maria","ObtainedMarks":390},{"Rollno":2,"Name":"Mashal","ObtainedMarks":489},{"Rollno":3,"Name":"Marya","ObtainedMarks":350},{"Rollno":4,"Name":"Hania","ObtainedMarks":460},{"Rollno":5,"Name":"Zehra","ObtainedMarks":159},{"Rollno":6,"Name":"Javeria","ObtainedMarks":345},{"Rollno":7,"Name":"Muskan","ObtainedMarks":385},{"Rollno":8,"Name":"Amen","ObtainedMarks":266},{"Rollno":9,"Name":"Uswa","ObtainedMarks":394},{"Rollno":10,"Name":"Zainab","ObtainedMarks":300},{"Rollno":11,"Name":"Muslim","ObtainedMarks":450},{"Rollno":12,"Name":"Muntazir","ObtainedMarks":239}]'

var studentArr = JSON.parse(students)
var failedstudent = studentArr.every(function (e) {
    return e.ObtainedMarks > 250
})
failedstudent == false ? console.log("The whole class is not promoted")
    : console.log("The whole class is promoted")
var sorting = studentArr.toSorted(function (a, b) {
    return a.ObtainedMarks - b.ObtainedMarks
})
console.log("This list of students by their marks in ascending order ", sorting)
var passedStudents = studentArr.filter(function (e) {
    return e.ObtainedMarks > 250
})
console.log(`The list of the passed students is `, passedStudents)
var totalMarks = 500
var percentage = studentArr.map(function (student) {
    return student.ObtainedMarks / totalMarks * 100
})
const studentsWithPercentage = studentArr.map(function (student, index) {
    return { ...student, Percentage: percentage[index] };
});
console.log("Percentages of the students", studentsWithPercentage)
const Grades = studentsWithPercentage.map(function (student) {
    return student.Percentage >= 90 ? "A+"
        : student.Percentage >= 80 ? "B+"
            : student.Percentage >= 70 ? "B"
                : student.Percentage >= 60 ? "C"
                    : "D"
})
const studentsWithGrades = studentArr.map(function (student, index) {
    return { ...student, Grades: Grades[index] };
});

console.log("Grades of the students", studentsWithGrades)

var distinctionsCount = studentsWithGrades.some(function (student) {
    return student.Grades == "A+"
})
var distinctionCounter = distinctionsCount == true ? "Class have distinctions"
    : "There is no distinction in class"
console.log(distinctionCounter)
var distinctionHolder = studentsWithPercentage.find(function (e) {
    return e.Percentage > 95
})
console.log("Distinction Holder of the Class", distinctionHolder)
console.log("Names of the Students of class")
for (const element of studentArr) {
    console.log(element.Name)
}
for (const element in studentArr) {
    console.log(studentArr[element])
}

