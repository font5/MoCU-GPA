var coursesContainer = document.getElementById('courses')
var koziTanoZaKwanza = document.querySelectorAll('.tano')
var fichaKoziZingine = document.querySelectorAll('.ficha-kozi')
var bataniZoteGpa = document.querySelectorAll('.all-gpa-btn')
var onyeshaTajaTano = document.querySelectorAll('.taja-tano-za-kwanza')
var fichaTajaZote = document.querySelectorAll('.taja-courses')

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

function hideTajaZote() {
    fichaTajaZote.forEach(hidingTaja => {
        hidingTaja.style.display = 'none'
    })
}

function selectingNumberOfCourses() {
    var numberOfCourses = document.getElementById('number-of-courses')
    if (numberOfCourses.value == 'five') {
        fiveCourses()
    }
    else if (numberOfCourses.value == 'six') {
        sixCourses()
    }
     else if (numberOfCourses.value == 'seven') {
        sevenCourses()
    }
     else if (numberOfCourses.value == 'eight') {
        eightCourses()
    }
     else if (numberOfCourses.value == 'nine') {
        nineCourses()
    }
     else if (numberOfCourses.value == 'ten') {
        tenCourses()
    }
     else if (numberOfCourses.value == 'eleven') {
        elevenCourses()
    }
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

function mama() {
    document.getElementById('number-of-courses').value = 'select'
    window.location.reload()
}