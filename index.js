//1. Declare a variable firstname and initialize it with the value 'Lata'.
const firstname = 'Lata';

//2. Which value does x have after execution of the following code?
//let x = 'Geeta';
//the value of x will be 'Geeta'

//3. Declare a variable flower and assign it the value 'rose'. Declare a second variable tree and assign it the value 'maple'.
let flower = 'rose';
let tree = 'maple';

//4. Which value does x have after execution of the following code?
/*let x = 'Tic';
x = 'Tac';
x = 'Toe';*/
// x = 'Toe';

/*5. Which value does x have after execution of the following code?                      let x = 'Laurel';
let y = 'Hardy';
let z = y;
y = x;
x = z;
Hardy;*/

//6. Define a function hello that returns 'Hello world!'
function hello(){
    return 'Hello word!';
}

//7. Define two functions. The first function a should return 'Hello a!' and the second function b should return 'Hello b!'.
function a(){
    return 'Hello a!';
}
 function b(){
    return 'Hello b!';
 }

 //8. Define a function greet returning the value  'Haydo!'   Declare a variable salutation Call the function greet and assign the result of the call to the variable salutation.
 function greet(){
    return 'Haydo!';
 }

 const salutation = greet();

 /*9. function hello() {
  return 'Hi!';
}

let x = hello();*/

// 10. Write a function echo that also returns the passed parameter. echo('Greta') should return 'Greta' and echo('CO2') should return 'CO2'
function echo(){
return echo ('Greta');
}


//resolution sheet 2.
/*1.let a = 0, 
    b = 1, 
    c = '1' 
;

Que vaut (a === 0); true         
Que vaut (a === 1); false
Que vaut (a === b); false
Que vaut (a === 0 && b === 1); true
Que vaut (a === 0 && b === 0); false
Que vaut (a === 0 || b === 0); false
Que vaut (b === c); false
Que vaut (b == c); true
Que vaut (a < b);  true
Que vaut (a >= b); false
Que vaut (a !== b); true
Que vaut (a === 0 && (b === 1 || b === 2)) true
Que vaut (a === 0 && true)  true*/ 

/*2. Ecrivez une fonction qui prend 3 paramètres (mots).

Concaténez les trois variables et vérifiez si sa taille est 
suppérieure à 100 alors affichez "C'est une grande phrase" 
sinon affichez "C'est une petite phrase". */

function checkWordLenght(firstWord, secondWord, treethhWord){
    const wordLenght = firstWord + secondWord + treethhWord;
    
    if(wordLenght.lenght > 100){
        console.log("c'est une grande phrase");
    }
    else {
    console.log("c'est une petite phrase");
}
    
}
checkWordLenght("salut", "comment", "tu");


/*3. Déclarer et définir 2 variables misteryNumber et myNumber de type number.
En utilisant uniquement l'opérateur ternaire, on affiche :

Si les 2 nombres sont égaux Congratulations !
Sinon
Si le nombre myNumber est inférieur au nombre misteryNumber, on affiche +
Sinon on affiche - */

const misteryNumber = 4;
const myNumber = 2;
misteryNumber === myNumber? console.log("Congratulations!"): myNumber < misteryNumber? console.log("+"): console.log("-");

//4. Create Function `findLargest()` finds the largest of three numbers.

function findLargest(firstNumber, secondNumber,
    treetNumber){
        let largestNum = firstNumber;
        if(largestNum < secondNumber){
            largestNum = secondNumber;
        }
        else {
            if(largestNum < treetNumber){
                largestNum = treetNumber;
            }
        }
        console.log(largestNum);
    }
    findLargest(8, 4, 9);
    

    //5.Create which Check if a triangle is equilateral, scalene, or isosceles
     function checkTriangleTypes(a, b, c){
        if(a===b && b===c){
            console.log('equilateral');
        } else if(a !== b && b !==c){
            console.log('scalene');
        }
        else{
            console.log('isoscele');
        }
     }
     checkTriangleTypes(45, 45, 45);
    
     /*7.Create `evalNumbers()` prints the result after evaluating arithmetic operations between two numbers of addition, multiplication, division, and modulus in JavaScript.
Print result of num1+num2 if operation is “add”
Print result of num1-num2 if operation is “subtract”
Print result of num1*num2 if operation is “multiply”
Print result of num1/num2 if operation is “divide”
Print result of num1%num2 if operation is “modulus”
Else print “Invalid operation” */

function evalNumber(){
    const numberFirst=30;
    const numberSecond=7;
    const currentOpera='modulus';
    switch (currentOpera) {
        case 'add':
            console.log(`Result: ${numberFirst + numberSecond}`);
        break;
        case 'subtract':
            console.log(`Result: ${numberFirst - numberSecond}`);
        break;
        case 'multiply':
            console.log(`Result: ${numberFirst * numberSecond}`);
        break;
        case 'divide':
            console.log(`Result: ${numberFirst / numberSecond}`);
        break;
        case 'modulus':
            console.log(`Result: ${numberFirst % numberSecond}`);
        break;
        default:
            console.log("Invalid Operation");
        }
        
}
evalNumber();


/*	
Create Function `checkLeapYear()` find if the given year is a leap year 
If year is divisble by 4 and not divisble by 100 then print “leap year”.
Or if year is divisible by 400 then print “leap year”.
Else print “not a leap year”. */
function checkLeapYear(aYear){
    if(aYear % 4 == 0 && aYear % 100 !== 0 || aYear % 400){
        console.log("leap year")
    } else{
        console.log("not a leap year");
    }
}
checkLeapYear(2007);
