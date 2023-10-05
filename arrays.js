//------------------------------------
let yourArray = ['One', true, 3, 4, 5];
//------------------------------------
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = 5;
// Only change code above this line
console.log(myArray);
//------------------------------------
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));
//------------------------------------
function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));
//------------------------------------
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0,1);
arr.splice(3,4);
// Only change code above this line
console.log(arr);
//------------------------------------
function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0,2, "DarkSalmon","BlanchedAlmond");
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
//------------------------------------
/*slice(). Em vez de modificar um array, slice() copia ou extrai um 
determinado número de elementos para um novo array, deixando intacto o array ao qual 
é chamado.*/
//------------------------------------
function forecast(arr) {
    // Only change code below this line
    arr = arr.slice(2,4);
    return arr;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));