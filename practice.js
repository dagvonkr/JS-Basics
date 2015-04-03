//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name) {
	if (name === 'Tyler') {
		return true;
	} else {
		return false;
	}

}

isTyler(name);

//Next problem

//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.




var getName = function() {
	var nameInput = prompt("Whats your name?");
	return nameInput;
}

var nameName = getName();


//Next Problem

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

// Igjen her, du skulle ikke ha noe input i fuksjonen her. Dette må du klare opp i. 

var welcome = function() {
		alert("Welcome " + nameName);
} 

welcome();

//Next problem




//What is the difference between arguments and parameters?

  //Arguments are values and parameters are the p"parameters of the values" 


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Nan
  //Undefined
  //null
  //0
  //' '
  //false

//Next Problem

//Create a function called myName that returns your name



  var myName = function() {
  	var name = 'Dag';
  	return name;
  }

  myName();

  // HEEEY!!! Her skulle jeg ikke ha legge inn en argument til funskjonene. Det var det jeg gjorde feil.
  // Jo, jeg skulle bare kjøre gjennom funskjonen, ikke hente noe fra noe sted. 


//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

// Nailed it!

//Next problem
//Create a function called outerFn which returns an anonymous function which returns your name.


var outerFn = function(newMyName) {
	return function(newMyName) {
		return newMyName;
	}
}

outerFn();

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

  innerFn(newMyName);

//Now invoke innerFn.
