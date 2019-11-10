document.getElementById('xhrButton').addEventListener('click', loadXhrData);
document.getElementById('ajaxButton').addEventListener('click', loadCustomer);
document.getElementById('ajaxMultiButton').addEventListener('click', loadCustomers);
document.querySelector('.get-jokes').addEventListener('click', startGetJokes);

const urlChuckJokes = 'http://api.icndb.com/jokes/random/';

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

function loadCustomer() {

	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'customer.json', true);
	xhr.onload = function () {
		if (this.status === 200) {
			const customer = JSON.parse(this.responseText);
			const outputMessage = `
				<ul>
					<li>ID: ${customer.id}</li>
					<li>Name: ${customer.name}</li>
					<li>Company: ${customer.company}</li>
				</ul>
			`;
			document.getElementById('output').innerHTML = outputMessage;
		}
	}
	xhr.send();
}

function loadCustomers() {

	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'customers.json', true);
	xhr.onload = function () {
		if (this.status === 200) {
			const customers = JSON.parse(this.responseText);
			let outputMessage = '';
			customers.forEach(function (customer) {
				outputMessage += `
				<ul>
					<li>ID: ${customer.id}</li>
					<li>Name: ${customer.name}</li>
					<li>Company: ${customer.company}</li>
				</ul>
			`;
			})

			document.getElementById('output').innerHTML = outputMessage;
		}
	}
	xhr.send();
}

function startGetJokes(e) {
	e.preventDefault();
	let numJokes = parseInt(document.getElementById('txtNumber').value);
	if (numJokes < 0) numJokes = 1;
	getJokes(numJokes);
}

function getJokes(numberJokes) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', `${urlChuckJokes}${numberJokes}`, true);
	let message = '';
	xhr.onload = function () {
		if (this.status === 200) {
			const jokes = JSON.parse(this.responseText);
			jokes.value.forEach(function (joke) {
				message += `<li>ID: ${joke.joke}</li>`;
			})
			document.querySelector('.jokes').innerHTML = message;
		}
	}

	xhr.send();
}