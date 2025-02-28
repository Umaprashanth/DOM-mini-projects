let currentStep = 1

const messageToDisplay = {
    1: "Add contact details for further information",
    2: "Add shipping address for successful delivery",
    3: "Complete payment to complete order",
    4: "Ready to get delivered",
    5: "Order delivered successfully"
}

const previousButton = document.querySelector(".previous")
const nextButton = document.querySelector(".next")

nextButton.addEventListener("click", nextEvent)

function nextEvent() {
  if (currentStep == 4) {
    nextButton.disabled = true
    previousButton.disabled = true
  }

  if (currentStep == 3) {
    document.querySelector(".next").innerText = "Finish"
  }

  if (currentStep == 1) {
    previousButton.disabled = false
  }

  const messageDiv = document.querySelector(".message")
  messageDiv.innerText = messageToDisplay[currentStep + 1]

  const currStepNumberDiv = document.querySelectorAll('.count')[currentStep - 1]
  
  currStepNumberDiv.querySelector(".number").innerText = "✔"
  currStepNumberDiv.querySelector(".number").style.color= "white"
  currStepNumberDiv.classList.remove("blue")
  currStepNumberDiv.classList.add("green")

  if (currentStep < 4) {
    currStepNumberDiv.nextElementSibling.style.borderColor = "green"
    const nextStepNumberDiv = document.querySelectorAll(`.count`)[currentStep]
    nextStepNumberDiv.classList.add("blue")
  }

  currentStep++
}

previousButton.addEventListener("click", prevEvent)

function prevEvent() {
  if (currentStep == 2) {
    previousButton.disabled = true
  }

  if (currentStep == 4) {
    document.querySelector(".next").innerText = "Next"
  }

  const messageDiv = document.querySelector(".message")
  messageDiv.innerText = messageToDisplay[currentStep - 1]

  const prevStepDiv = document.querySelectorAll('.count')[currentStep - 2]

  prevStepDiv.querySelector(".number").innerText = `${currentStep - 1}`
  prevStepDiv.querySelector(".number").style.color = "black"
  prevStepDiv.classList.add("blue")
  prevStepDiv.classList.remove("green")

  prevStepDiv.nextElementSibling.style.borderColor = "black"

  document.querySelectorAll('.count')[currentStep - 1].classList.remove("blue")

  currentStep--
}