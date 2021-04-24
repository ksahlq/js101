let transactions = [{ id: 101, movement: 'in', quantity: 5 },
{ id: 105, movement: 'in', quantity: 10 },
{ id: 102, movement: 'out', quantity: 17 },
{ id: 101, movement: 'in', quantity: 12 },
{ id: 103, movement: 'out', quantity: 20 },
{ id: 102, movement: 'out', quantity: 15 },
{ id: 105, movement: 'in', quantity: 25 },
{ id: 101, movement: 'out', quantity: 18 },
{ id: 102, movement: 'in', quantity: 22 },
{ id: 103, movement: 'out', quantity: 15 },];

function isItemAvailable(id, transactions) {
  let inventories = transactionsFor(id, transactions);
  let sum = 0;

  inventories.forEach(inventory => {
    if (inventory.movement === 'out') return inventory.quantity = -inventory.quantity;
  });

  inventories.forEach(inventory => {
    sum += inventory.quantity;
  });

  if (sum > 0) {
    return true;
  } else {
    return false;
  }
}

// helper function from previous exercise 
function transactionsFor(id, transactions) {
  return transactions.filter(element => element.id === id)
}

console.log(
  isItemAvailable(101, transactions),
  isItemAvailable(103, transactions),
  isItemAvailable(105, transactions)
);