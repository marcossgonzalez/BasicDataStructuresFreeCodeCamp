//-------------------------------------------
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  foods['bananas'] = 13;
  foods.grapes = 35;
  foods.strawberries= 27;
  
  // Only change code above this line
  
  console.log(foods);
//-------------------------------------------
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity.data.online = 45;
  // Only change code above this line
  
  console.log(userActivity);
//-------------------------------------------
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem];
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));
//-------------------------------------------
/*Se quisermos remover a chave apples, podemos removê-la usando a palavra-chave delete como esta:
delete foods.apples;*/
//-------------------------------------------
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  
  // Only change code above this line
  
  console.log(foods);
//-------------------------------------------
/*Agora podemos adicionar, modificar e remover chaves de objetos. Mas e se quiséssemos apenas saber se um objeto possui uma propriedade 
específica? JavaScript nos fornece duas maneiras diferentes de fazer isso. Um usa o método hasOwnProperty() e o outro usa a 
palavra-chave in. Se tivermos um objeto users com uma propriedade Alan, poderemos verificar sua presença de uma das seguintes maneiras:

users.hasOwnProperty('Alan');
'Alan' in users;*/
//-------------------------------------------
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    let array = ["Alan", "Jeff", "Sarah", "Ryan"];
    for (let i = 0; i<4;i++ ){
      return userObj.hasOwnProperty(array[i]) &&
      userObj.hasOwnProperty(array[i+1]) &&
      userObj.hasOwnProperty(array[i+2]) &&
      userObj.hasOwnProperty(array[i+3]);
      }
  
      
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));
//-------------------------------------------
/*Às vezes você precisa iterar todas as chaves dentro de um objeto. 
Você pode usar um loop for...in para fazer isso. O loop for...in se parece com:

const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}
*/
//-------------------------------------------