function getMarksheet(studentName,grade,...subjectMarks){
const totalObtainedMarks=subjectMarks.reduce((acc, marks) => acc + marks, 0)
const totalMarks=subjectMarks.length*100
const Percentage=(totalObtainedMarks/totalMarks)*100+" %"
const marksheetDetails = {
    studentName,
    grade,
    subjectMarks: {...subjectMarks},
    totalMarks,
    Percentage
  };
  

  return marksheetDetails

}
const name="Mehreen"
const grade=9
const english=89
const maths=100
const urdu=90
const geography=78
const history=88
const science=90
const marksheet=getMarksheet(name,grade,english,urdu,maths,geography,history,science)
console.log(marksheet)