var totalC1 = document.getElementById('total-1').value
var totalC2 = document.getElementById('total-2').value
var totalC3 = document.getElementById('total-3').value
var totalC4 = document.getElementById('total-4').value
var totalC5 = document.getElementById('total-5').value
var totalC6 = document.getElementById('total-6').value
var totalC7 = document.getElementById('total-7').value
var totalC8 = document.getElementById('total-8').value
var totalC9 = document.getElementById('total-9').value
var totalC10 = document.getElementById('total-10').value
var totalC11 = document.getElementById('total-11').value

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
    if (totalC1 >= 70) {
        var Y1 = ((0.02 * totalC1) + 3)
    }
    console.log(Y1)
})