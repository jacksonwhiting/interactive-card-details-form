const thankYouSection = document.querySelector("#thank-you-section")
const cardMonthInput = document.querySelector("#card-month")
const cardYearInput = document.querySelector("#card-year")
const monthErrMsg = document.querySelector("#month-err-msg")
const cardFormBtn = document.querySelector("#card-form-btn")
const thankYouBtn = document.querySelector("#thank-you-btn")
const cardForm = document.querySelector("#credit-card-form")
const cardFormArr = [...cardForm]

// The month error message has to be rendered separately because
// it shows for both the month and the year errors.
const renderMonthErrMsg = () => {
	if (!cardYearInput.validity.valid || !cardMonthInput.validity.valid) {
		monthErrMsg.classList.remove("hidden")
	} else {
		monthErrMsg.classList.add("hidden")
	}
}

cardFormArr.forEach((input) => {
	input.addEventListener("blur", (e) => {
		if (!e.target.validity.valid) {
			e.target.classList.add("border-error")
			e.target.classList.remove("border-pri-light")
			e.target.classList.add("blur-err-msg")
		} else {
			e.target.classList.remove("border-error")
			e.target.classList.add("border-pri-light")
			e.target.classList.remove("blur-err-msg")
		}
	})
})

cardFormBtn.addEventListener("click", (e) => {
	e.preventDefault()
	if (cardForm.checkValidity()) {
		cardForm.classList.toggle("hidden")
		thankYouSection.classList.toggle("hidden")
	} else {
		alert("Please check the required fields")
	}
})

thankYouBtn.addEventListener("click", (e) => {
	e.preventDefault()
	thankYouSection.classList.toggle("hidden")
	cardForm.classList.toggle("hidden")
})
