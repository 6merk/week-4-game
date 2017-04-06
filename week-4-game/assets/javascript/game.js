// Execute function when DOM has loaded
$(document).ready(function() {


  // Current points number, clicking crystals will change this number
  var yourMatchingNumber = 0;

  // Target number creator
  var randomNum = randomNumGen();

  // Staring variables
  var wins = 0;
  var losses = 0;
  var crystals;

  // Creates random values for crystals and returns object
  function randomNumCrystals() {
    // Crystals object
    return {
      red: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/red.png"
      },

      blue: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/blue.png"
      },

      yellow: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/yellow.png"
      },

      green: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/green.png"
      }    
    };
  }

  // Random number generator btwn 19 and 102
  function randomNumGen() {
    return Math.floor(Math.random() * 102) + 19;
  }

  // Resets the game to starting score
  function setGame() {
    // Make our current total number 0.
    yourMatchingNumber = 0;
    // Creates random crystal values
    crystals = randomNumCrystals();
    // Creates random target number and puts it on to HTML
    randomNum = randomNumGen();
    $("#random-area").text(randomNum);
  }

  // Updates wins and losses counter once user wins or loses
  function updateDom(didUserWin) {
    $("#win-area").empty();

    // When the user wins
    if (didUserWin === true) {
      // Appends victory message, restarts the game, pushes new current guess number to html
      $("#win-area").append($("<p>").text("You won"));
      setGame();
      renderMatchingNumber();
    }
    // When the user loses
    else if (didUserWin === false) {
      // Appends defeat message, restarts the game, pushes new current guess number to html
      $("#win-area").append($("<p>").text("You lost"));
      setGame();
      renderMatchingNumber();
    }

    // Wins and losses counter that gets appended to display
    var wSpan = $("<span>").text(wins);
    var lSpan = $("<span>").text(losses);

    var pWins = $("<p>").text("Wins: ");
    var pLosses = $("<p>").text("Losses: ");

    pWins.append(wSpan);
    pLosses.append(lSpan);

    $("#win-area").append(pWins);
    $("#win-area").append(pLosses);
  }

  // Renders crystals to html
  function renderCrystals() {
    for (var key in crystals) {
      var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
      var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
      crystalDiv.append(crystalImg);
      $("#crystal-area").append(crystalDiv);
    }
  }

  // Function to update our "current guess" number. We are passing in the crystal that was clicked as an argument.
  function updateMatchingNumber(crystal) {
    // Update our "current guess" number based on which crystal was clicked.
    yourMatchingNumber += crystals[crystal.attr("data-name")].points;
  }

  // Function that will render your "current guess" number to the page.
  function renderMatchingNumber() {
    var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
    $("#score-area").html();
    $("#score-area").html(scoreNumDiv);
  }

  // Functions to start game
  setGame();
  updateDom();
  renderCrystals();
  renderMatchingNumber();

  // On click for crystals
  $(".crystals-button").on("click", function(event) {
    // updates current guess number and re-renders it
    updateMatchingNumber($(this));
    renderMatchingNumber();

    // Sees if we won or lost by checking if we match the target number
    
    if (yourMatchingNumber === randomNum) {
      wins++;
      setGame();
      updateDom(true);
    }
    // If our guess number exceeded our target number...
    else if (yourMatchingNumber > randomNum) {
      losses++;
      setGame();
      updateDom(false);
    }
  });

});
