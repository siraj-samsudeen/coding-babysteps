const inputElement = document.querySelector("#new-item");
const todoForm = document.querySelector("form");
const todoList = document.querySelector("#list");
const submitButton = document.querySelector("#submit-button");

function addNewItem(e) {
	todoList.insertAdjacentHTML("beforeend", `<li>${inputElement.value}</li>`);
	todoForm.reset(); //Clear the already entered value as we are not refreshing the page

	// A valid item will enable the save button in the validate function, so we need to disable it
	submitButton.setAttribute("disabled", "");
	e.preventDefault(); // Refreshing the page will clear away the todoList items. So we need to prevent it
}

function preventEmptyItem(e) {
	if (this.value.trim()) {
		submitButton.removeAttribute("disabled");
	} else {
		submitButton.setAttribute("disabled", "");
	}
}

todoForm.addEventListener("submit", addNewItem);
inputElement.addEventListener("input", preventEmptyItem);