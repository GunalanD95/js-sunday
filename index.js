// GET QUOTES FROM API AND DISPLAY ON PAGE

let apiQuotes = [];



async function getQuotes(){
    const ApiUrl  = 'https://type.fit/api/quotes';
    try {
        // getting json data from api untill it is fetched
        const response = await fetch(ApiUrl); 

        apiQuotes = await response.json();
        console.log(apiQuotes);
    } catch (error) {
        // if error, display error messages
        console.error(error);
    }

    // display quotes on page

    var item = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    var text = item.text;
    var author = item.author;
    console.log(text,"text");
    console.log(author,"author");

    document.getElementById("quote").innerHTML = text;
    document.getElementById("author").innerHTML = author;

}

// ON LOAD 

// getQuotes();