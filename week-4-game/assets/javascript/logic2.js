$(function() {


    var numberToReach = Math.floor((Math.random() * 120) + 19);
    var colors = ['red', 'blue', 'yellow', 'green'];
    var colorObj = {};
    colors.forEach(function(color) {
        colorObj[color] = Math.floor((Math.random() * 12) + 1);
    });

    var total = 0;
    var wins = 0;
    var losses = 0;


    var crystalRandomNumber = function() {
        document.querySelector('#score-title').innerHTML = "Number to reach: " + numberToReach;
    };
    crystalRandomNumber();
    //onclick function for random number values for each crystal

    $(document).on('click', '#redclick', function() {
        total = total + colorObj.red;
        $('#crystal-score-area').html("Current number: " + total);

           if (total == numberToReach) {
            wins++;
            $('#wins-counter').html(wins + ': congratulations');
        } else if (total > numberToReach) {
            losses++;
            console.log(losses);
            $('#losses-counter').html(losses + ': sorry');
        }



    })
    $(document).on('click', '#blueclick', function() {
        total = total + colorObj.blue;
        $('#crystal-score-area').html("Current number: " + total);

           if (total == numberToReach) {
            wins++;
            $('#wins-counter').html(wins + ': congratulations');
        } else if (total > numberToReach) {
            losses++;
            console.log(losses);
            $('#losses-counter').html(losses + ': sorry');
        }



    })
    $(document).on('click', '#greenclick', function() {
        total = total + colorObj.green;
        $('#crystal-score-area').html("Current number: " + total);

           if (total == numberToReach) {
            wins++;
            $('#wins-counter').html(wins + ': congratulations');
        } else if (total > numberToReach) {
            losses++;
            console.log(losses);
            $('#losses-counter').html(losses + ': sorry');
        }



    })
    $(document).on('click', '#yellowclick', function() {
        total = total + colorObj.yellow;
        $('#crystal-score-area').html("Current number: " + total);

        if (total == numberToReach) {
            wins++;
            $('#wins-counter').html(wins + ': congratulations');
        } else if (total > numberToReach) {
            losses++;
            console.log(losses);
            $('#losses-counter').html(losses + ': sorry');
        }


    })



})






// wins or loss counter


// reset of score to 0
