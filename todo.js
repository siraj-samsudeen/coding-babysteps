const inputElement = document.querySelector("#new-item");
const todoForm = document.querySelector("form");
const todoList = document.querySelector("#list");

function addNewItem(e) {
	todoList.insertAdjacentHTML("beforeend", `<li>${inputElement.value}</li>`);
	todoForm.reset(); //Clear the already entered value as we are not refreshing the page

	e.preventDefault(); //Refreshing the page will clear away the todoList items. So we need to prevent it
}

todoForm.addEventListener("submit", addNewItem);