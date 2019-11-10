document.getElementById('xhrButton').addEventListener('click', loadXhrData);

function loadXhrData(e) {
	const xhr = new XMLHttpRequest();

	xhr.open("GET", 'data.txt', true);

	xhr.onload = function () {
		if (this.status === 200) {
			document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
			console.log(this.responseText)
		}
		else {
			console.log(`Error occured: ${this.status}`)
		}
	}

	xhr.send();
}