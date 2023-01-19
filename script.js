const multiStepform = document.querySelector("[data-multi-step]")
const formSteps = [...multiStepform.querySelectorAll("[data-step]")]

let currentStep = parseInt(
    formSteps.findIndex( step => {
        return step.classList.contains("active")
    })
)
if (currentStep < 0 ) {
    currentStep = 0;
    formSteps[currentStep].classList.add("active")
}
multiStepform.addEventListener("click", e => {
    if (e.target.matches("[data-next]")) {
        currentStep += 1
    }else if (e.target.matches("[data-previous]")) {
        currentStep -= 1
    }
    showCurrentStep()
})

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active" , index === currentStep)
    })
}
