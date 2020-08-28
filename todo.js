document.querySelector("form").addEventListener("submit", saveItem);

function saveItem(e) {
	let inputElement = document.querySelector("#new-item");
	document.querySelector("#list").insertAdjacentHTML("beforeend", `<li>${inputElement.value}</li>`);
	inputElement.value = '';

	e.preventDefault();
}