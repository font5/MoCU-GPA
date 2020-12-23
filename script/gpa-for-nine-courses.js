var calculateGpaButton = {
    btnForFiveCourses: document.getElementById('gpa-btn1'),
    btnForSixCourses: document.getElementById('gpa-btn2'),
    btnForSevenCourses: document.getElementById('gpa-btn3'),
    btnForEightCourses: document.getElementById('gpa-btn4'),
    btnForNineCourses: document.getElementById('gpa-btn5'),
    btnForTenCourses : document.getElementById('gpa-btn6'),
    btnForElevenCourses : document.getElementById('gpa-btn7')
}

calculateGpaButton.btnForNineCourses.addEventListener('click', () => {
    var courseWork1Value = document.getElementById('input-course-work1').valueAsNumber
    var ue1Value = document.getElementById('input-final1').valueAsNumber
    var totalMarksForCourse1 = courseWork1Value + ue1Value
    document.getElementById('gpa-container').style.display = 'block'
    var gpaYa = document.getElementById('umepata-gpa-ya')
    document.getElementById('gpa-btn5').style.display = 'none'
    document.getElementById('recalculate').style.display = 'block'
    var status = document.getElementById('status')

    if (totalMarksForCourse1 > 100) {
        alert('Maksi za kozi ya kwanza zimezidi 100. Tafadhali weka Maksi sahihi')
    }
    else if (totalMarksForCourse1 >= 70) {
        var Y1 = ((0.02 * totalMarksForCourse1) + 3).toFixed(1)
    }
    else if (totalMarksForCourse1 >= 65) {
         Y1 = ((0.08 * totalMarksForCourse1) - 1.2).toFixed(1)
    }
    else if (totalMarksForCourse1 >= 60) {
        Y1 = ((0.2 * totalMarksForCourse1) - 9).toFixed(1)
    }
    else if (totalMarksForCourse1 >= 50) {
        Y1 = ((0.1 * totalMarksForCourse1) - 3).toFixed(1)
    }
    else if (totalMarksForCourse1 >= 40) {
        Y1 = ((0.1 * totalMarksForCourse1) - 3).toFixed(1)
    }
    else if (totalMarksForCourse1 >= 0) {
        Y1 = (0.025 * totalMarksForCourse1).toFixed(1)
    }
    else if (totalMarksForCourse1 < 0) {
        alert('Maksi za kozi ya kwanza zipo chini ya "0". Tafadhali weka Maksi sahihi')
    }


    // course 2

    var courseWork2Value = document.getElementById('input-course-work2').valueAsNumber
    var ue2Value = document.getElementById('input-final2').valueAsNumber
    var totalMarksForCourse2 = courseWork2Value + ue2Value

    if (totalMarksForCourse2 > 100) {
        alert('Maksi za kozi ya pili zimezidi 100. Tafadhali weka Maksi sahihi')
    }
    else if (totalMarksForCourse2 >= 70) {
        var Y2 = ((0.02 * totalMarksForCourse2) + 3).toFixed(1)
    }
    else if (totalMarksForCourse2 >= 65) {
        Y2 = ((0.08 * totalMarksForCourse2) - 1.2).toFixed(1)
    }
    else if (totalMarksForCourse2 >= 60) {
        Y2 = ((0.2 * totalMarksForCourse2) - 9).toFixed(1)
    }
    else if (totalMarksForCourse2 >= 50) {
        Y2 = ((0.1 * totalMarksForCourse2) - 3).toFixed(1)
    }
    else if (totalMarksForCourse2 >= 40) {
        Y2 = ((0.1 * totalMarksForCourse2) - 3).toFixed(1)
    }
    else if (totalMarksForCourse2 >= 0) {
        Y2 = (0.025 * totalMarksForCourse2).toFixed(1)
    }
    else if (totalMarksForCourse2 < 0) {
        alert('Maksi za kozi ya pili zipo chini ya "0". Tafadhali weka Maksi sahihi')
    }


    // kozi ya tatu

    var courseWork3Value = document.getElementById('input-course-work3').valueAsNumber
    var ue3Value = document.getElementById('input-final3').valueAsNumber
    var totalMarksForCourse3 = courseWork3Value + ue3Value

    if (totalMarksForCourse3 > 100) {
        alert('Maksi za kozi ya tatu zimezidi 100. Tafadhali weka Maksi sahihi')
    }
    else if (totalMarksForCourse3 >= 70) {
        var Y3 = ((0.02 * totalMarksForCourse3) + 3).toFixed(1)
    }
    else if (totalMarksForCourse3 >= 65) {
        Y3 = ((0.08 * totalMarksForCourse3) - 1.2).toFixed(1)
    }
    else if (totalMarksForCourse3 >= 60) {
        Y3 = ((0.2 * totalMarksForCourse3) - 9).toFixed(1)
    }
    else if (totalMarksForCourse3 >= 50) {
        Y3 = ((0.1 * totalMarksForCourse3) - 3).toFixed(1)
    }
    else if (totalMarksForCourse3 >= 40) {
        Y3 = ((0.1 * totalMarksForCourse3) - 3).toFixed(1)
    }
    else if (totalMarksForCourse3 >= 0) {
        Y3 = (0.025 * totalMarksForCourse3).toFixed(1)
    }
    else if (totalMarksForCourse3 < 0) {
        alert('Maksi za kozi ya tatu zipo chini ya "0". Tafadhali weka Maksi sahihi')
    }


    //kozi ya nne

    var courseWork4Value = document.getElementById('input-course-work4').valueAsNumber
    var ue4Value = document.getElementById('input-final4').valueAsNumber
    var totalMarksForCourse4 = courseWork4Value + ue4Value

    if (totalMarksForCourse4 > 100) {
        alert('Maksi za kozi ya nne zimezidi 100. Tafadhali weka Maksi sahihi')
    }
    else if (totalMarksForCourse4 >= 70) {
        var Y4 = ((0.02 * totalMarksForCourse4) + 3).toFixed(1)
    }
    else if (totalMarksForCourse4 >= 65) {
        Y4 = ((0.08 * totalMarksForCourse4) - 1.2).toFixed(1)
    }
    else if (totalMarksForCourse4 >= 60) {
        Y4 = ((0.2 * totalMarksForCourse4) - 9).toFixed(1)
    }
    else if (totalMarksForCourse4 >= 50) {
        Y4 = ((0.1 * totalMarksForCourse4) - 3).toFixed(1)
    }
    else if (totalMarksForCourse4 >= 40) {
        Y4 = ((0.1 * totalMarksForCourse4) - 3).toFixed(1)
    }
    else if (totalMarksForCourse4 >= 0) {
        Y4 = (0.025 * totalMarksForCourse4).toFixed(1)
    }
    else if (totalMarksForCourse4 < 0) {
        alert('Maksi za kozi ya nne zipo chini ya "0". Tafadhali weka Maksi sahihi')
    }


    //kozi ya tano

    var courseWork5Value = document.getElementById('input-course-work5').valueAsNumber
    var ue5Value = document.getElementById('input-final5').valueAsNumber
    var totalMarksForCourse5 = courseWork5Value + ue5Value

    if (totalMarksForCourse5 > 100) {
        alert('Maksi za kozi ya tano zimezidi 100. Tafadhali weka Maksi sahihi')
    }
    else if (totalMarksForCourse5 >= 70) {
        var Y5 = ((0.02 * totalMarksForCourse5) + 3).toFixed(1)
    }
    else if (totalMarksForCourse5 >= 65) {
        Y5 = ((0.08 * totalMarksForCourse5) - 1.2).toFixed(1)
    }
    else if (totalMarksForCourse5 >= 60) {
        Y5 = ((0.2 * totalMarksForCourse5) - 9).toFixed(1)
    }
    else if (totalMarksForCourse5 >= 50) {
        Y5 = ((0.1 * totalMarksForCourse5) - 3).toFixed(1)
    }
    else if (totalMarksForCourse5 >= 40) {
        Y5 = ((0.1 * totalMarksForCourse5) - 3).toFixed(1)
    }
    else if (totalMarksForCourse5 >= 0) {
        Y5 = (0.025 * totalMarksForCourse5).toFixed(1)
    }
    else if (totalMarksForCourse5 < 0) {
        alert('Maksi za kozi ya tano zipo chini ya "0". Tafadhali weka Maksi sahihi')
    }

    //kozi ya sita


    var courseWork6Value = document.getElementById('input-course-work6').valueAsNumber
    var ue6Value = document.getElementById('input-final6').valueAsNumber
    var totalMarksForCourse6 = courseWork6Value + ue6Value

    if (totalMarksForCourse6 > 100) {
        alert('Maksi za kozi ya sita zimezidi 100. Tafadhali weka Maksi sahihi')
    }
    else if (totalMarksForCourse6 >= 70) {
        var Y6 = ((0.02 * totalMarksForCourse6) + 3).toFixed(1)
    }
    else if (totalMarksForCourse6 >= 65) {
        Y6 = ((0.08 * totalMarksForCourse6) - 1.2).toFixed(1)
    }
    else if (totalMarksForCourse6 >= 60) {
        Y6 = ((0.2 * totalMarksForCourse6) - 9).toFixed(1)
    }
    else if (totalMarksForCourse6 >= 50) {
        Y6 = ((0.1 * totalMarksForCourse6) - 3).toFixed(1)
    }
    else if (totalMarksForCourse6 >= 40) {
        Y6 = ((0.1 * totalMarksForCourse6) - 3).toFixed(1)
    }
    else if (totalMarksForCourse6 >= 0) {
        Y6 = (0.025 * totalMarksForCourse6).toFixed(1)
    }
    else if (totalMarksForCourse6 < 0) {
        alert('Maksi za kozi ya sita zipo chini ya "0". Tafadhali weka Maksi sahihi')
    }

    //kozi ya saba

    var courseWork7Value = document.getElementById('input-course-work7').valueAsNumber
    var ue7Value = document.getElementById('input-final7').valueAsNumber
    var totalMarksForCourse7 = courseWork7Value + ue7Value

    if (totalMarksForCourse7 > 100) {
        alert('Maksi za kozi ya Saba zimezidi 100. Tafadhali weka Maksi sahihi')
    }
    else if (totalMarksForCourse7 >= 70) {
        var Y7 = ((0.02 * totalMarksForCourse7) + 3).toFixed(1)
    }
    else if (totalMarksForCourse7 >= 65) {
        Y7 = ((0.08 * totalMarksForCourse7) - 1.2).toFixed(1)
    }
    else if (totalMarksForCourse7 >= 60) {
        Y7 = ((0.2 * totalMarksForCourse7) - 9).toFixed(1)
    }
    else if (totalMarksForCourse7 >= 50) {
        Y7 = ((0.1 * totalMarksForCourse7) - 3).toFixed(1)
    }
    else if (totalMarksForCourse7 >= 40) {
        Y7 = ((0.1 * totalMarksForCourse7) - 3).toFixed(1)
    }
    else if (totalMarksForCourse7 >= 0) {
        Y7 = (0.025 * totalMarksForCourse7).toFixed(1)
    }
    else if (totalMarksForCourse7 < 0) {
        alert('Maksi za kozi ya Saba zipo chini ya "0". Tafadhali weka Maksi sahihi')
    }

    //kozi ya nane

    var courseWork8Value = document.getElementById('input-course-work8').valueAsNumber
    var ue8Value = document.getElementById('input-final8').valueAsNumber
    var totalMarksForCourse8 = courseWork8Value + ue8Value

    if (totalMarksForCourse8 > 100) {
        alert('Maksi za kozi ya Nane zimezidi 100. Tafadhali weka Maksi sahihi')
    }
    else if (totalMarksForCourse8 >= 70) {
        var Y8 = ((0.02 * totalMarksForCourse8) + 3).toFixed(1)
    }
    else if (totalMarksForCourse8 >= 65) {
        Y8 = ((0.08 * totalMarksForCourse8) - 1.2).toFixed(1)
    }
    else if (totalMarksForCourse8 >= 60) {
        Y8 = ((0.2 * totalMarksForCourse8) - 9).toFixed(1)
    }
    else if (totalMarksForCourse8 >= 50) {
        Y8 = ((0.1 * totalMarksForCourse8) - 3).toFixed(1)
    }
    else if (totalMarksForCourse8 >= 40) {
        Y8 = ((0.1 * totalMarksForCourse8) - 3).toFixed(1)
    }
    else if (totalMarksForCourse8 >= 0) {
        Y8 = (0.025 * totalMarksForCourse8).toFixed(1)
    }
    else if (totalMarksForCourse8 < 0) {
        alert('Maksi za kozi ya Nane zipo chini ya "0". Tafadhali weka Maksi sahihi')
    }

    //kozi ya 9

    var courseWork9Value = document.getElementById('input-course-work9').valueAsNumber
    var ue9Value = document.getElementById('input-final9').valueAsNumber
    var totalMarksForCourse9 = courseWork9Value + ue9Value

    if (totalMarksForCourse9 > 100) {
        alert('Maksi za kozi ya Tisa zimezidi 100. Tafadhali weka Maksi sahihi')
    }
    else if (totalMarksForCourse9 >= 70) {
        var Y9 = ((0.02 * totalMarksForCourse9) + 3).toFixed(1)
    }
    else if (totalMarksForCourse9 >= 65) {
        Y9 = ((0.08 * totalMarksForCourse9) - 1.2).toFixed(1)
    }
    else if (totalMarksForCourse9 >= 60) {
        Y9 = ((0.2 * totalMarksForCourse9) - 9).toFixed(1)
    }
    else if (totalMarksForCourse9 >= 50) {
        Y9 = ((0.1 * totalMarksForCourse9) - 3).toFixed(1)
    }
    else if (totalMarksForCourse9 >= 40) {
        Y9 = ((0.1 * totalMarksForCourse9) - 3).toFixed(1)
    }
    else if (totalMarksForCourse9 >= 0) {
        Y9 = (0.025 * totalMarksForCourse9).toFixed(1)
    }
    else if (totalMarksForCourse9 < 0) {
        alert('Maksi za kozi ya Tisa zipo chini ya "0". Tafadhali weka Maksi sahihi')
    }

    var totalGPA = (((Y1*1) + (Y2*1) + (Y3*1) + (Y4*1) + (Y5*1) + (Y6*1) + (Y7*1) + (Y8*1) + (Y9*1) ) / (9*1)).toFixed(1)
    gpaYa.innerText = totalGPA
    if (totalGPA <= 5.0 &&  totalGPA >= 4.4) {
        status.innerText = 'Excellent 👏'
        status.style.color = 'green'
    }
    else if (totalGPA <= 4.3 && totalGPA >= 4.0) {
        status.innerText = 'Very Good 👏'
        status.style.color = 'Green'
    }
    else if (totalGPA <= 3.9 && totalGPA >= 3.0) {
        status.innerText = 'Good 😃'
        status.style.color = 'Blue'
    }
    else if (totalGPA <= 2.9 && totalGPA >= 2.0) {
        status.innerText = 'Satisfactory 🙂'
        status.style.color = 'Yellow'
    }
    else if (totalGPA <= 1.9 && totalGPA >= 1.0) {
        status.innerText = 'Marginal Fail 😥'
        status.style.color = 'Red'
    }
    else if (totalGPA <= 0.9 && totalGPA >= 0) {
        status.innerText = 'Fail 😭'
        status.style.color = 'Red'
    }
    else {
        status.innerText = 'Wrong GPA, Jaribu tena..'
    }
})