var coursesContainer = document.getElementById('courses')
var koziTanoZaKwanza = document.querySelectorAll('.tano')
var fichaKoziZingine = document.querySelectorAll('.ficha-kozi')
var bataniZoteGpa = document.querySelectorAll('.all-gpa-btn')
var onyeshaTajaTano = document.querySelectorAll('.taja-tano-za-kwanza')
var fichaTajaZote = document.querySelectorAll('.taja-courses')
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

var koziMojaMoja = {
    koziYaSita: document.getElementById('course6'),
    koziYaSaba: document.getElementById('course7'),
    koziYaNane: document.getElementById('course8'),
    koziYaTisa: document.getElementById('course9'),
    koziYaKumi: document.getElementById('course10'),
    koziYa11  : document.getElementById('course11')
}

var koziTitle = {
    title6: document.getElementById('taja-sixth'),
    title7: document.getElementById('taja-seventh'),
    title8: document.getElementById('taja-eighth'),
    title9: document.getElementById('taja-nineth'),
    title10: document.getElementById('taja-tenth'),
    title11: document.getElementById('taja-eleventh')
}

var koziMarks = {
    koziMarks1: {
        courseWork: Number(document.getElementById('input-course-work1').value),
        ue: Number(document.getElementById('input-final1').value)
    }
}

function hideTajaZote() {
    fichaTajaZote.forEach(hidingTaja => {
        hidingTaja.style.display = 'none'
    })
}

function fiveCourses() {
    coursesContainer.style.display = 'block'
    bataniZoteGpa.forEach(batani => {
        if (batani.id == 'gpa-btn1') {
            batani.style.display = 'block'
        }
        else { batani.style.display = 'none' }
    })

    koziTanoZaKwanza.forEach(tanoZa1 => {
        tanoZa1.style.display = 'flex'
    })

    fichaKoziZingine.forEach(fichaZingine => {
        fichaZingine.style.display = 'none'
    })

    hideTajaZote()  //this is not quite good due to function hoisting (it is like reading line by line)

    onyeshaTajaTano.forEach(tajaTano => {    // this is good (hoisting in function) not line by line
        tajaTano.style.display = 'block'
    })
}

function sixCourses() {
    coursesContainer.style.display = 'block'
    bataniZoteGpa.forEach(batani => {
        if (batani.id == 'gpa-btn2') {
            batani.style.display = 'block'
        }
        else { batani.style.display = 'none' }
    })

    koziTanoZaKwanza.forEach(tanoZa1 => {
        tanoZa1.style.display = 'flex'
    })

    fichaKoziZingine.forEach(fichaZingine => {
        fichaZingine.style.display = 'none'
    })

    koziMojaMoja.koziYaSita.style.display = 'flex'

    hideTajaZote()

    onyeshaTajaTano.forEach(tajaTano => {
        tajaTano.style.display = 'block'
    })

    koziTitle.title6.style.display = 'block'
}

function sevenCourses() {
    coursesContainer.style.display = 'block'
    bataniZoteGpa.forEach(batani => {
        if (batani.id == 'gpa-btn3') {
            batani.style.display = 'block'
        }
        else { batani.style.display = 'none' }
    })

    koziTanoZaKwanza.forEach(tanoZa1 => {
        tanoZa1.style.display = 'flex'
    })

    fichaKoziZingine.forEach(fichaZingine => {
        fichaZingine.style.display = 'none'
    })
    koziMojaMoja.koziYaSita.style.display = 'flex'
    koziMojaMoja.koziYaSaba.style.display = 'flex'

    hideTajaZote()

    onyeshaTajaTano.forEach(tajaTano => {
        tajaTano.style.display = 'block'
    })

    koziTitle.title6.style.display = 'block'
    koziTitle.title7.style.display = 'block'
}

function eightCourses() {
    coursesContainer.style.display = 'block'
    bataniZoteGpa.forEach(batani => {
        if (batani.id == 'gpa-btn4') {
            batani.style.display = 'block'
        }
        else { batani.style.display = 'none' }
    })

    koziTanoZaKwanza.forEach(tanoZa1 => {
        tanoZa1.style.display = 'flex'
    })

    fichaKoziZingine.forEach(fichaZingine => {
        fichaZingine.style.display = 'none'
    })
    koziMojaMoja.koziYaSita.style.display = 'flex'
    koziMojaMoja.koziYaSaba.style.display = 'flex'
    koziMojaMoja.koziYaNane.style.display = 'flex'

    hideTajaZote()

    onyeshaTajaTano.forEach(tajaTano => {
        tajaTano.style.display = 'block'
    })

    koziTitle.title6.style.display = 'block'
    koziTitle.title7.style.display = 'block'
    koziTitle.title8.style.display = 'block'
}

function nineCourses() {
    coursesContainer.style.display = 'block'
    bataniZoteGpa.forEach(batani => {
        if (batani.id == 'gpa-btn5') {
            batani.style.display = 'block'
        }
        else { batani.style.display = 'none' }
    })

    koziTanoZaKwanza.forEach(tanoZa1 => {
        tanoZa1.style.display = 'flex'
    })

    fichaKoziZingine.forEach(fichaZingine => {
        fichaZingine.style.display = 'none'
    })
    koziMojaMoja.koziYaSita.style.display = 'flex'
    koziMojaMoja.koziYaSaba.style.display = 'flex'
    koziMojaMoja.koziYaNane.style.display = 'flex'
    koziMojaMoja.koziYaTisa.style.display = 'flex'

    hideTajaZote()

    onyeshaTajaTano.forEach(tajaTano => {
        tajaTano.style.display = 'block'
    })

    koziTitle.title6.style.display = 'block'
    koziTitle.title7.style.display = 'block'
    koziTitle.title8.style.display = 'block'
    koziTitle.title9.style.display = 'block'
}

function tenCourses() {
    coursesContainer.style.display = 'block'
    bataniZoteGpa.forEach(batani => {
        if (batani.id == 'gpa-btn6') {
            batani.style.display = 'block'
        }
        else { batani.style.display = 'none' }
    })

    koziTanoZaKwanza.forEach(tanoZa1 => {
        tanoZa1.style.display = 'flex'
    })

    fichaKoziZingine.forEach(fichaZingine => {
        fichaZingine.style.display = 'none'
    })
    koziMojaMoja.koziYaSita.style.display = 'flex'
    koziMojaMoja.koziYaSaba.style.display = 'flex'
    koziMojaMoja.koziYaNane.style.display = 'flex'
    koziMojaMoja.koziYaTisa.style.display = 'flex'
    koziMojaMoja.koziYaKumi.style.display = 'flex'

    hideTajaZote()

    onyeshaTajaTano.forEach(tajaTano => {
        tajaTano.style.display = 'block'
    })

    koziTitle.title6.style.display = 'block'
    koziTitle.title7.style.display = 'block'
    koziTitle.title8.style.display = 'block'
    koziTitle.title9.style.display = 'block'
    koziTitle.title10.style.display = 'block'
}

function elevenCourses() {
    coursesContainer.style.display = 'block'
    bataniZoteGpa.forEach(batani => {
        if (batani.id == 'gpa-btn7') {
            batani.style.display = 'block'
        }
        else { batani.style.display = 'none' }
    })

    koziTanoZaKwanza.forEach(tanoZa1 => {
        tanoZa1.style.display = 'flex'
    })

    fichaKoziZingine.forEach(fichaZingine => {
        fichaZingine.style.display = 'none'
    })
    koziMojaMoja.koziYaSita.style.display = 'flex'
    koziMojaMoja.koziYaSaba.style.display = 'flex'
    koziMojaMoja.koziYaNane.style.display = 'flex'
    koziMojaMoja.koziYaTisa.style.display = 'flex'
    koziMojaMoja.koziYaKumi.style.display = 'flex'
    koziMojaMoja.koziYa11.style.display = 'flex'

    hideTajaZote()

    onyeshaTajaTano.forEach(tajaTano => {
        tajaTano.style.display = 'block'
    })

    koziTitle.title6.style.display = 'block'
    koziTitle.title7.style.display = 'block'
    koziTitle.title8.style.display = 'block'
    koziTitle.title9.style.display = 'block'
    koziTitle.title10.style.display = 'block'
    koziTitle.title11.style.display = 'block'
}

//On input changing marks and total
function cWork1() {
    let cWorkInput = Number(document.getElementById('input-course-work1').value)
    let ueInput = Number(document.getElementById('input-final1').value)
    let total = document.getElementById('total-1')
    total.value = cWorkInput + ueInput
}

function ue1() {
    let cWorkInput = Number(document.getElementById('input-course-work1').value)
    let ueInput = Number(document.getElementById('input-final1').value)
    let total = document.getElementById('total-1')
    total.value = cWorkInput + ueInput
}

function cWork2() {
    let cWorkInput = Number(document.getElementById('input-course-work2').value)
    let ueInput = Number(document.getElementById('input-final2').value)
    let total = document.getElementById('total-2')
    total.value = cWorkInput + ueInput
}

function ue2() {
    let cWorkInput = Number(document.getElementById('input-course-work2').value)
    let ueInput = Number(document.getElementById('input-final2').value)
    let total = document.getElementById('total-2')
    total.value = cWorkInput + ueInput
}

function cWork3() {
    let cWorkInput = Number(document.getElementById('input-course-work3').value)
    let ueInput = Number(document.getElementById('input-final3').value)
    let total = document.getElementById('total-3')
    total.value = cWorkInput + ueInput
}

function ue3() {
    let cWorkInput = Number(document.getElementById('input-course-work3').value)
    let ueInput = Number(document.getElementById('input-final3').value)
    let total = document.getElementById('total-3')
    total.value = cWorkInput + ueInput
}

function cWork4() {
    let cWorkInput = Number(document.getElementById('input-course-work4').value)
    let ueInput = Number(document.getElementById('input-final4').value)
    let total = document.getElementById('total-4')
    total.value = cWorkInput + ueInput
}

function ue4() {
    let cWorkInput = Number(document.getElementById('input-course-work4').value)
    let ueInput = Number(document.getElementById('input-final4').value)
    let total = document.getElementById('total-4')
    total.value = cWorkInput + ueInput
}

function cWork5() {
    let cWorkInput = Number(document.getElementById('input-course-work5').value)
    let ueInput = Number(document.getElementById('input-final5').value)
    let total = document.getElementById('total-5')
    total.value = cWorkInput + ueInput
}

function ue5() {
    let cWorkInput = Number(document.getElementById('input-course-work5').value)
    let ueInput = Number(document.getElementById('input-final5').value)
    let total = document.getElementById('total-5')
    total.value = cWorkInput + ueInput
}

function cWork6() {
    let cWorkInput = Number(document.getElementById('input-course-work6').value)
    let ueInput = Number(document.getElementById('input-final6').value)
    let total = document.getElementById('total-6')
    total.value = cWorkInput + ueInput
}

function ue6() {
    let cWorkInput = Number(document.getElementById('input-course-work6').value)
    let ueInput = Number(document.getElementById('input-final6').value)
    let total = document.getElementById('total-6')
    total.value = cWorkInput + ueInput
}

function cWork7() {
    let cWorkInput = Number(document.getElementById('input-course-work7').value)
    let ueInput = Number(document.getElementById('input-final7').value)
    let total = document.getElementById('total-7')
    total.value = cWorkInput + ueInput
}

function ue7() {
    let cWorkInput = Number(document.getElementById('input-course-work7').value)
    let ueInput = Number(document.getElementById('input-final7').value)
    let total = document.getElementById('total-7')
    total.value = cWorkInput + ueInput
}

function cWork8() {
    let cWorkInput = Number(document.getElementById('input-course-work8').value)
    let ueInput = Number(document.getElementById('input-final8').value)
    let total = document.getElementById('total-8')
    total.value = cWorkInput + ueInput
}

function ue8() {
    let cWorkInput = Number(document.getElementById('input-course-work8').value)
    let ueInput = Number(document.getElementById('input-final8').value)
    let total = document.getElementById('total-8')
    total.value = cWorkInput + ueInput
}

function cWork9() {
    let cWorkInput = Number(document.getElementById('input-course-work9').value)
    let ueInput = Number(document.getElementById('input-final9').value)
    let total = document.getElementById('total-9')
    total.value = cWorkInput + ueInput
}

function ue9() {
    let cWorkInput = Number(document.getElementById('input-course-work9').value)
    let ueInput = Number(document.getElementById('input-final9').value)
    let total = document.getElementById('total-9')
    total.value = cWorkInput + ueInput
}

function cWork10() {
    let cWorkInput = Number(document.getElementById('input-course-work3').value)
    let ueInput = Number(document.getElementById('input-final3').value)
    let total = document.getElementById('total-3')
    total.value = cWorkInput + ueInput
}

function ue10() {
    let cWorkInput = Number(document.getElementById('input-course-work10').value)
    let ueInput = Number(document.getElementById('input-final10').value)
    let total = document.getElementById('total-10')
    total.value = cWorkInput + ueInput
}

function cWork11() {
    let cWorkInput = Number(document.getElementById('input-course-work3').value)
    let ueInput = Number(document.getElementById('input-final3').value)
    let total = document.getElementById('total-3')
    total.value = cWorkInput + ueInput
}

function ue11() {
    let cWorkInput = Number(document.getElementById('input-course-work11').value)
    let ueInput = Number(document.getElementById('input-final11').value)
    let total = document.getElementById('total-11')
    total.value = cWorkInput + ueInput
}

//Oninput changing marks and total

// calculate gpa for each marks

calculateGpaButton.btnForFiveCourses.addEventListener('click', () => {
    if (totalC1 >= 70) {
        var Y1 = ((0.02 * totalC1) + 3)
    }
    console.log(Y1)
})