// # JS Day 1 Homework WHODUNNIT?
//
// Go through each sample code and work out what the output will be and explain what happened.
//
// ### Episode 1
// ```js
var name = 'Bob';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// ANSWER: 'My name is Bob' because 'Bob' is global

// ```
//
// ### Episode 2
// ```js
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());
// ```

// ANSWER: 3 because score is reassigned in the function before it is returned by the function.

//
// ### Episode 3
// ```js
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// ```
// ANSWER: Duck, dog, lion with index positions. Code iterates over the list and prints the strings. Reassigned before executing.

// ### Episode 4
//
// ```js
var suspectOne = 'Ally';
var suspectTwo = 'Alan';
var suspectThree = 'Upul';
var suspectFour = 'Alistair';

var allSuspects = function() {
  var suspectThree = 'Colin'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );
// ```

// ANSWER: Ally, Alan, Colin, Alistair. Suspect three is Upul. suspectThree is called globally. The reassignment was a local change.

// ### Episode 5
//
// ```js
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());
// ```

// ANSWER: Poirot. Name is reassigned after calling the function.

// ### Episode 6
// ```js
var murderer = 'Rick';

var outerFunction = function() {
  var murderer = 'Morty';

  var innerFunction = function() {
    murderer = 'Jerry';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);
// ```

// ANSWER: Rick. outerFunction is called, but the log is calling the global variable.

// ### Episode 7 - Make up your own episode/s!
//
// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.

var murderer = "Alan";
var victim = "Upal";

var parallelUniverse = function() {
  var murderer = "Ally";
  return murderer;
}

console.log(victim + " was murdered by... ");
console.log(parallelUniverse());
