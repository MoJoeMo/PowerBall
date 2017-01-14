//create a function that will take the user input, and store them in an array
function getGuesses() {
    var guessList = [];     //create an empty array to store numbers in
    var listLength = 6;     //create a length var for the loop to iterate through
    
    //create a loop to gatther the numbers in the text inputs, and store them in the array
    for ( i = 1; i <= listLength; i++ ){
        var input = document.getElementById( 'box' + i ).value;
        guessList.push(input);
        guessList.sort(function(a, b) {return a - b});
    }
    addDisplay();
}
//create a function that will add the animation class to the balls
function addDisplay() {
    $('#balls').removeClass('ball-display');
    $('#balls').addClass('numbers');
    $('span').html('?');
    setTimeout(function() {fader()}, 5500);
}
function fader() {    
    $('span').html('?').empty();
	for ( i = 0; i < 6; i++ ) {
		$('#rnd' + i).addClass('blank');
	}
	$('#rndP').addClass('blank');
    createRandomNums();
}
//create a function that will create 5 random numbers between 1 - 59
//push them into an array
function createRandomNums() {
    var biggest = 59;
    var smallest = 1;
    var lottoNums  =  [];
    
    //use a loop to enter each random num into an array
    for ( i = 0; i <= 5; i++ ) {
        var randomNum = (smallest + Math.random()*(biggest - smallest));
        var randomNumPrecise = randomNum.toFixed(0);
        lottoNums.push(randomNumPrecise);
        lottoNums.sort(function(a, b) {return a - b});
    }
	//create a random powerball num
	var biggestP = 35;
    var smallestP = 1;
    var powerNum = (smallestP + Math.random()*(biggestP - smallestP));
    var powerNumPrecise = powerNum.toFixed(0);
	
    //use a loop to display each random num in each ball
    for ( i = 0; i <= 5; i++ ){
        $('#rnd' + i).animate({opacity: 0}).html(lottoNums[i]);
    }
	$('#rndP').animate( {opacity: 0} ).html(powerNumPrecise);
	displayNums();	
}
function displayNums() {
  increment = 250;
  for ( i = 1; i < 6; i++ ) {
    $('#rnd' + i).delay(increment).animate({opacity:1}, 250).effect('bounce', {times : 1 }, 'slow');
    increment += 250;
  }
	$('#rndP').delay(1500).animate({opacity:1}, 250).effect('bounce', {times : 1 }, 'slow');
  setTimeout(function() {thanks();},3000);
}
function thanks() {
  alert("Thanks for playing!")
}

function resetgame() {
	for ( i = 0; i < 7; i++ ) {
		$('#box'+i).val(" ");
		$('#rnd'+i).empty();		
	}
	$('#rndP').empty();
	$('#balls').removeClass('numbers');
	$('#balls').addClass('ball-display');	
}
$('#msg2').hide().delay(600).show();