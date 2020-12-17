var calculateGpaButton = {
    btnForFiveCourses: document.getElementById('gpa-btn1'),
    btnForSixCourses: document.getElementById('gpa-btn2'),
    btnForSevenCourses: document.getElementById('gpa-btn3'),
    btnForEightCourses: document.getElementById('gpa-btn4'),
    btnForNineCourses: document.getElementById('gpa-btn5'),
    btnForTenCourses : document.getElementById('gpa-btn6'),
    btnForElevenCourses : document.getElementById('gpa-btn7')
}

calculateGpaButton.btnForFiveCourses.addEventListener('click', () => {
    var courseWorkValue = document.getElementById('input-course-work1').valueAsNumber
    var ueValue = document.getElementById('input-final1').valueAsNumber
    var totalMarksForCourse = courseWorkValue + ueValue

    if (totalMarksForCourse >= 70) {
        var YforA = ((0.02 * totalMarksForCourse) + 3).toFixed(1)
        alert ('GPA =' + ' ' + YforA)
    }
    else if (totalMarksForCourse >= 65) {
        var YforB = ((0.08 * totalMarksForCourse) - 1.2).toFixed(1)
        alert ('GPA =' + ' ' + YforB)
    }
    else if (totalMarksForCourse >= 60) {
        var YforC = ((0.2 * totalMarksForCourse) - 9).toFixed(1)
        alert ('GPA =' + ' ' + YforC)
    }
})

