const billAmount = document.querySelector("#Bill-Amount")
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button")
const message = document.querySelector("#error-message")
const messageTwo = document.querySelector("#text-error")

const avilableNotes = [2000, 500, 100, 20, 10, 5, 1]
const noOfNotes = document.querySelectorAll(".no-of-notes")

checkButton.addEventListener("click", validateBillAmount = () => {
    hiddenMessage()



    if (billAmount.value > 0) {

        if (cashGiven.value > billAmount.value) {
            const amountToBeReturn = cashGiven.value - billAmount.value
            calculateChange(amountToBeReturn)

        } else {
            showAllMessage("Do you wanna was plates?")
        }

    } else {
        showAllMessage("Invalid bill Amount!")

    }



})

function calculateChange(amountToBeReturn) {
    for (i = 0; i < avilableNotes.length; i++) {

        const numOfNotes = Math.trunc(amountToBeReturn / avilableNotes[i])
        amountToBeReturn %= avilableNotes[i]
        noOfNotes[i].innerText = numOfNotes


    }
}

function hiddenMessage() {
    message.style.display = "none";
    // messageTwo.style.display="none"
}

function showAllMessage(messg) {
    message.style.display = "block"
    message.innerText = messg
    

}

