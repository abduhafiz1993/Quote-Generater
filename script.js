const quotehtml = document.getElementById("quote-text");
const authorhtml = document.getElementById("author");
const tiwterbtn = document.getElementById("Twitter");
const newQoute = document.getElementById("new-quote");
const qouteContainer = document.getElementById("quote-container");
const loader = document.getElementById("loader");
const url = "https://type.fit/api/quotes";
var result = [];
var quote;

function showLoader() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}
function hideLoader() {
	loader.hidden = true;
	quoteContainer.hidden = false;
}
function writeQuote() {
	quote = result[Math.floor(Math.random() * result.length)];
	quotehtml.innerHTML=quote.text;	
	if (!quote.author) {
		authorhtml.innerHTML="Unknown";
	}else{
		authorhtml.innerHTML=quote.author;
	}
}
async function getQuote() {
try {
	const response = await fetch(url);
    result = await response.json();
	writeQuote();
} catch (error) {
	console.log(error);
}
}

function tweetQuote() {
	const twitterurl = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;
	window.open(twitterurl, '_blank');
}

newQoute.addEventListener("click", writeQuote);
tiwterbtn.addEventListener("click", tweetQuote);

getQuote();

