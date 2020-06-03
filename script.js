var massMark, heightMark;
massMark = 80; //kg
heightMark = 3; //m

var massJohn, heightJohn;
massJohn = 75;
heightJohn = 4;

var BMIMark, BMIJohn;
BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log("Is Mark/'s BMI higher than John? " + markHigherBMI);
