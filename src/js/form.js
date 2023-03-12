const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const messageTextArea = document.querySelector("#message")
const submitBtn = document.querySelector(".submit")

const validateForm = () => {
	const name = nameInput.value.trim()
	const email = emailInput.value.trim()
	const message = messageTextArea.value.trim()
	let valid = true

	if (!name) {
		nameInput.style.border = "2px solid #2A78FE"
		nameInput.placeholder = "Please enter your name."
		

		valid = false
	} else {
		nameInput.style.border = ""
		nameInput.placeholder = "Name"
	}

	if (!email) {
		emailInput.style.border = "2px solid #2A78FE"
		emailInput.placeholder = "Please enter your email address."
		valid = false
	} else if (
		!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
			email
		)
	) {
		emailInput.style.border ="2px solid #2A78FE"
		emailInput.placeholder = "Please provide a valid email address."
		valid = false
	} else {
		emailInput.style.border = ""
		emailInput.placeholder = "Adres e-mail"
	}

	if (!message) {
		messageTextArea.style.border = "2px solid #2A78FE"
		messageTextArea.placeholder = "Please enter a message."
		valid = false
	} else {
		messageTextArea.style.border = ""
		messageTextArea.placeholder = "Wiadomość"
	}

	return valid
}


submitBtn.addEventListener("click", validateForm)
