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
let users2 = {
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
  
  console.log(isEveryoneHere(users2));
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
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
    let count = 0;
    for (let userss in allUsers){
      if (allUsers[userss]["online"] === true){
        count +=1;
      }
      else{
        count +=0;
      }}
      return count;
    // Only change code above this line
  }
  
  console.log(countOnline(users));
//-------------------------------------------
/*Também podemos gerar um array que contém todas as chaves armazenadas em um objeto com o método ''Object.keys()''. 
Este método recebe um objeto como argumento e retorna uma matriz de strings 
representando cada propriedade do objeto. Novamente, não haverá uma ordem específica para as entradas na matriz.*/
//-------------------------------------------
let users3 = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Only change code below this line´
    let array = []
    array = Object.keys(obj);
    return array;
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users3));
//-------------------------------------------
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));
//-------------------------------------------