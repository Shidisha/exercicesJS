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

 let salutation = greet();

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

Que vaut (a === 0);          
Que vaut (a === 1);
Que vaut (a === b);
Que vaut (a === 0 && b === 1); 
Que vaut (a === 0 && b === 0); 
Que vaut (a === 0 || b === 0); 
Que vaut (b === c);
Que vaut (b == c); 
Que vaut (a < b);  
Que vaut (a >= b); 
Que vaut (a !== b); 
Que vaut (a === 0 && (b === 1 || b === 2))
Que vaut (a === 0 && true)*/ 

/*2. Ecrivez une fonction qui prend 3 paramètres (mots).

Concaténez les trois variables et vérifiez si sa taille est 
suppérieure à 100 alors affichez "C'est une grande phrase" 
sinon affichez "C'est une petite phrase". */

function checkWordLenght(firstWord, secondWord, treethWord){
    let wordLenght = firstWord + secondWord + treethWord;
    
    if(wordLenght.lenght > 100){
        console.log(`c'est une grande phrase`)
    }
    else console.log(`c'est une petite phrase`);
}


/*3. Déclarer et définir 2 variables misteryNumber et myNumber de type number.
En utilisant uniquement l'opérateur ternaire, on affiche :

Si les 2 nombres sont égaux Congratulations !
Sinon
Si le nombre myNumber est inférieur au nombre misteryNumber, on affiche +
Sinon on affiche - */

let misteryNumber = "";
let 

