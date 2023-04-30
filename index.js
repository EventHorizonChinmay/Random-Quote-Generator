const quoteEl = document.getElementById('quote')
const authorEl = document.getElementById('author')
const btnEl = document.getElementById('btn')
const apiURL = `https://api.quotable.io/random `
async function getQuote(){
    try {
        console.log('clicked')
        btnEl.innerText = 'Loading...'
        const response = await fetch(apiURL)
        //Another method to convert to json
        const data = await response.json()
        console.log(data.content)
        const quote = data.content;
        const author = data.author;
        quoteEl.innerText = quote
        authorEl.innerText = '~'+author
        btnEl.innerText = "Get a Quote"
            
    } catch (error) {
        quoteEl.style.size = '1px';
        quoteEl.style.color = 'brown';
        quoteEl.innerText = '<Error occured>'//error
        authorEl.innerText = 'Pl try later'
        
    }


}

btnEl.addEventListener("click", getQuote)