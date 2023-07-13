const url = "https://type.fit/api/quotes";
var result = [];
async function getQuote() {
try {
	const response = await fetch(url);
	const result = await response.json();
	console.log(result[3]);
} catch (error) {
	console.log(error);
}
}

getQuote();
