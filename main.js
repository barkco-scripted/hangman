$(document).ready(function() {

  var words = ["ScriptEd",  "Hackathon", "Landfill", "substancex", "DrGloo"];
  // Fill the words array above with the words you want to play with in your game.

  var selectedWord; // This will be set to the word in your array selected by your chooseRandomWord method.
  var guessFields = []; // This will be set to the clue that the user sees. Something like "_ _ _ _ _".

  function startGame() {
   $("#pregame-message").css("display", "none");
    // Hide the "#pregame-message" 
    $("#letter-input").css("display", "block")
    // Show the "#letter-input"
    chooseRandomWord();
    // Call the "chooseRandomWord" method so a new word is selected for the game.
  }
  
  function chooseRandomWord() {
    // Generate a random number between 0 and words.length and save it as a variable called "randomIndex."
    var randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex]
    initializeGuessFields();
    // Call the "initializeGuessFields" method so we can set up the guess fields for the game.
  }

  function initializeGuessFields() {
    wordArray().forEach(function(letter) {
      letterField = "_"
      guessFields.push(letterField);
    })

    fields = guessFields.toString().replace(/,/g, " ");
    $("#word-format").text(fields);
  }

  function updateGuessFields(guessedLetter) {
    wordArray().forEach(function(letter) {
      if (guessedLetter == letter) {
        guessFields[i] = letter
      }
    })

    fields = guessFields.toString().replace(/,/g, " ");
    $("#word-format").text(fields);
  }

  function guessLetter() {
    var letters = wordArray()
    var letter = $("#letterGuessed").val();

    for (i = 0; i < letters.length; i++) {
      if (letter == letters[i]) {
        $("#guess-message").text("NICE GUESS!")
        updateGuessFields(letter)
      }
    }
    // Clear input field after the letter is evaluated.
  }

  function wordArray() {
    // Return the "selectedWord" as an array, so that each letter is its own indexed element.
    return selectedWord.split(" ");
    debugger
  }
  // Make the "#start" button call the "startGame" method on click.
  $("#start").click(function() {
    startGame();
  })
  // Make the "#guess" button call the "guessLetter" method on click.
  $("#guess").click(function() {
    guessLetter();
  })
})




