var answer = document.getElementById("answer")
var Escore = document.getElementById("score")

var round = 1
var score = 0

var alertScore = () => {
    showModalScore()
    $('#losemodal').modal('show');
}

var win = () => {
    $('#winmodal').modal('show');
}

var showModalScore = () => {
    var modalScore = document.getElementById("modalScore")
    modalScore.innerHTML = "You got  " + score + " /10"
}

var reload = () => {
    location.reload();
}

var Next = () => {
    if (round == 1 && answer.value == 3) {
        score += 1
        round += 1
        Escore.innerHTML = "Score : " + score
        hideImg('img01')
        showImg('img02')
        answer.value = ""
    } else if (round == 2 && answer.value == 12) {
        score += 1
        round += 1
        Escore.innerHTML = "Score : " + score
        hideImg('img02')
        showImg('img03')
        answer.value = ""
    } else if (round == 3 && answer.value == 20) {
        score += 1
        round += 1
        Escore.innerHTML = "Score : " + score
        hideImg('img03')
        showImg('img04')
        answer.value = ""
    } else if (round == 4 && answer.value == 26) {
        score += 1
        round += 1
        Escore.innerHTML = "Score : " + score
        hideImg('img04')
        showImg('img05')
        answer.value = ""
    } else if (round == 5 && answer.value == 90) {
        score += 1
        round += 1
        Escore.innerHTML = "Score : " + score
        hideImg('img05')
        showImg('img06')
        answer.value = ""
    } else if (round == 6 && answer.value == 30) {
        score += 1
        round += 1
        Escore.innerHTML = "Score : " + score
        hideImg('img06')
        showImg('img07')
        answer.value = ""
    } else if (round == 7 && answer.value == 35) {
        score += 1
        round += 1
        Escore.innerHTML = "Score : " + score
        hideImg('img07')
        showImg('img08')
        answer.value = ""
    } else if (round == 8 && answer.value == 31) {
        score += 1
        round += 1
        Escore.innerHTML = "Score : " + score
        hideImg('img08')
        showImg('img09')
        answer.value = ""
    } else if (round == 9 && answer.value == 13) {
        score += 1
        round += 1
        Escore.innerHTML = "Score : " + score
        hideImg('img09')
        showImg('img10')
        answer.value = ""
    } else if (round == 10 && answer.value == 20) {
        score += 1
        Escore.innerHTML = "Score : " + score
        if (score == 10) {
            win()
        } else {
            alertScore()
        }
        answer.value = ""
    } else {
        alertScore()
        answer.value = ""
    }
}


function hideImg(id) {
    document.getElementById(id).style.display = 'none';
}


function showImg(id) {
    document.getElementById(id).style.display = 'block';
}

function hide(id) {
    document.getElementById(id).style.display = 'none';
}


function show(id) {
    document.getElementById(id).style.display = 'block';
}

