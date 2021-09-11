let answerPlayer = ""
let answerBot = ""

function generateRandomNumber() {
    let number = Math.floor(Math.random() * (4 - 1)) + 1
    return number
}

function startTimer(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function setAnswerBot() {
    let number = generateRandomNumber()
    if (number === 1) {
        window.document.getElementById("stone2").style.opacity = 1
        answerBot = "stone2"
    } else if (number === 2) {
        window.document.getElementById("paper2").style.opacity = 1
        answerBot = "paper2"
    } else if (number === 3) {
        window.document.getElementById("scissors2").style.opacity = 1
        answerBot = "scissors2"
    }
}

function increaseOpacity(id) {
    window.document.getElementById(id).style.opacity = 1
}

function decreaseOpacity(id) {
    window.document.getElementById(id).style.opacity = 0.2
}

function setAnswerPlayer(id) {
    if (id === "stone1") {
        answerPlayer = id
    } else if (id === "paper1") {
        answerPlayer = id
    } else if (id === "scissors1") {
        answerPlayer = id
    }
    setAnswerBot()
    runGame()
}

async function runGame() {
    let player = window.document.getElementById("player")
    let bot = window.document.getElementById("bot")
    if (answerPlayer === "stone1" && answerBot === "scissors2" || answerPlayer === "paper1" && answerBot === "stone2" || answerPlayer === "scissors1" && answerBot === "paper2") {
        console.log("Você ganhou!")
        player.style.backgroundColor = "green"
        bot.style.backgroundColor = "red"
    } else if (answerBot === "stone2" && answerPlayer === "scissors1" || answerBot === "paper2" && answerPlayer === "stone1" || answerBot === "scissors2" && answerPlayer === "paper1") {
        console.log("Bot ganhou!")
        player.style.backgroundColor = "red"
        bot.style.backgroundColor = "green"
    } else {
        console.log("Empate!")
        player.style.backgroundColor = "red"
        bot.style.backgroundColor = "red"
    }
    window.document.getElementById("subTitle1").style.color = "white"
    window.document.getElementById("subTitle2").style.color = "white"
    await startTimer(1500)
    location.reload()
}