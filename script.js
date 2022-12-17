const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader');

// Get Quotes from API
let apiQuotes = [];

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show new quote
let newQuote = () => {
  loading();
  //Pick a random quote from apiQuotes array
  apiQuotes = apiQuotes.filter(quote => quote.tag = "motivational");
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
  authorText.textContent = quote.author ? quote.author : "unknown";
  // Check Quote length to determine styling 
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote')
  } else {
    quoteText.classList.remove('long-quote')
  }
  // Set Quote, Hide Loader
  quoteText.textContent = quote.text;
  complete();
}

async function getQuotes() {
  loading();
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
    complete();
  } catch (error) {
    // Catch Error Here 
  }
}

// Tweet Quote

function getTwitter() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=
  ${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank'); 
}

//Event Listener

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', getTwitter);


// On Load 
getQuotes();