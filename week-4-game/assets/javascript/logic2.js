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

    var reset = function() {
        console.log('wooo')

        console.log('total: ', total, ' NTR: ', numberToReach)
      total = 0;
      numberToReach=Math.floor((Math.random() * 120) + 19);
      crystalRandomNumber();
      
    }

    function crystalRandomNumber() {
        document.querySelector('#score-title').innerHTML = "Number to reach: " + numberToReach;
    };
    crystalRandomNumber();
    //onclick function for random number values for each crystal

    $(document).on('click', '#redclick', function() {
        total = total + colorObj.red;
        $('#crystal-score-area').html("Current number: " + total);

           if (total == numberToReach) {
            wins++;
            reset();

            alert("Congratulations");
    		
            $('#wins-counter').html('Wins: ' + wins);
        } else if (total > numberToReach) {
            losses++;
            reset();
            console.log('total: ', total, ' NTR: ', numberToReach)
            alert("Try Again");
            // console.log(losses);
            $('#losses-counter').html('Losses: ' + losses);
        }



    })
    $(document).on('click', '#blueclick', function() {
        total = total + colorObj.blue;
        $('#crystal-score-area').html("Current number: " + total);

           if (total == numberToReach) {
            wins++;
            reset();
            $('#wins-counter').html('Wins: ' + wins);
        } else if (total > numberToReach) {
            losses++;
             reset();
            console.log(losses);
            $('#losses-counter').html('Losses: ' + losses);
        }



    })
    $(document).on('click', '#greenclick', function() {
        total = total + colorObj.green;
        $('#crystal-score-area').html("Current number: " + total);

           if (total == numberToReach) {
            wins++;
             reset();
            $('#wins-counter').html('Wins: ' + wins);
        } else if (total > numberToReach) {
            losses++;
             reset();
            console.log(losses);
            $('#losses-counter').html('Losses: ' + losses);
        }



    })
    $(document).on('click', '#yellowclick', function() {
        total = total + colorObj.yellow;
        $('#crystal-score-area').html("Current number: " + total);

        if (total == numberToReach) {
            wins++;
             reset();
            $('#wins-counter').html('Wins: ' + wins);
        } else if (total > numberToReach) {
            losses++;
             reset();
            console.log(losses);
            $('#losses-counter').html('Losses: ' + losses);
        }


    })



})





// wins or loss counter


// reset of score to 0
