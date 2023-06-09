const form = document.querySelector('form') //grab fomr
form.addEventListener("submit" , convertUSDtoWon) //onsubmit

function convertUSDtoWon(event) { //conversion
    event.preventDefault() //stop form from refreshing page
    const usd = Number(event.target.usd.value) //get from value
    const won = usd / 0.00078 //convert to Won
    //Now display on page:
    document.querySelector('h2').innerText = 
    "$" + usd.toLocaleString() + " USD is equal to " + won.toLocaleString() + " Korean Won " 
}
 