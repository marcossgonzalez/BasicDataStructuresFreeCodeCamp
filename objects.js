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

//-------------------------------------------
