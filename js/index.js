$(document).ready(function() {
  var randomNumber;
  var randomQuote;
  var randomAuthor;
  
                  function getQuote() {
                   var quote = ["Try to be a rainbow in someone’s cloud.", "I believe that if one always looked at the skies, one would end up with wings.", "Whether you think you can or you think you can’t, you’re right.", "Life is 10% what happens to me and 90% of how I react to it.", "Believe you can and you’re halfway there.", "Do or do not. There is no try."]
                   
                    var author = [" ~ Maya Angelou", " ~ Gustave Flaubert", " ~ Henry Ford", " ~ Charles Swindoll", " ~ Theodore Roosevelt", " ~ Yoda"]
                    
                    randomNumber = Math.floor((Math.random()*quote.length));
                    randomQuote = quote[randomNumber];
                    randomAuthor = author[randomNumber];
                    
                    $(".quote").text(randomQuote);
                    $(".author").text(randomAuthor);
                  }
  
  $("#newQuote").on("click", function() {
               getQuote();
               });
  
  $('#tweet').on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + randomQuote + randomAuthor);
  });
  
                  });