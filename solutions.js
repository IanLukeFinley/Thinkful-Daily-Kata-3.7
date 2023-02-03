
function countCandyTypes (inventory) {
  let output = 0;
  for (i = 0; i<inventory.length; i++) {
    output += 1;
  }
  return output;
}


function totalInStock(inventory){
  let output = 0;
  for (i = 0; i<inventory.length; i++) {
    output += inventory[i].inStock;
  }
  return output;
}


function addCandyToInventory (inventory, newCandy) {
  inventory.push(newCandy);
  return inventory;
}


function shouldWeOrderThisCandy (inventory, string){
  const target = inventory.find(element => element.candy === string);
  if (target) {
    return target.inStock < target.weeklyAverage ? true : false;
  }
  return false;
}


function candyOrderQuantity (inventory, string){
  let target = inventory.find(element => element.candy === string)
  if (target) {
    return target.inStock > target.weeklyAverage ? 0 : target.weeklyAverage*2;
  }
  return 0;
}


function allCandyOrders (inventory) {
  let order = {}
  inventory.forEach (row => {
    const name = row.candy;
    const quantity = row.inStock > row.weeklyAverage ? 0 : row.weeklyAverage*2;
    order[name] = quantity;
  })
  return order;
}
