// Helper function to simulate async operations
function simulateAsync(taskName, successRate = 1, time = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < successRate) {
        resolve(`${taskName} completed`);
      } else {
        reject(`${taskName} failed`);
      }
    }, time);
  });
}

// Step 1: Check restaurant availability
function checkRestaurant() {
  return simulateAsync("Check restaurant", 0.9, 500);
}

// Step 2: Place order for multiple items (dynamic loop)
function placeOrder(items) {
  // items = array of { name, quantity }
  let promises = items.map((item) =>
    simulateAsync(`Order ${item.name}`, 0.95, 800)
  );
  return Promise.all(promises);
}

// Step 3: Prepare food (sequential loop)
function prepareFood(orders) {
  // Sequentially prepare each item
  let promiseChain = Promise.resolve();
  orders.forEach((order) => {
    promiseChain = promiseChain.then(() =>
      simulateAsync(`Prepare ${order}`, 0.9, 1000)
    );
  });
  return promiseChain;
}

// Step 4: Deliver food (can deliver multiple orders in parallel)
function deliverFood(orders) {
  let promises = orders.map((order) =>
    simulateAsync(`Deliver ${order}`, 0.85, 1500)
  );
  return Promise.all(promises);
}

// Step 5: Payment (race condition example)
function processPayments(payments) {
  // payments = array of payment methods
  let promises = payments.map((p) =>
    simulateAsync(`Payment via ${p}`, 0.95, Math.random() * 2000 + 500)
  );
  return Promise.race(promises);
}

// Simulation
const itemsToOrder = [
  { name: "Pizza", quantity: 1 },
  { name: "Burger", quantity: 2 },
  { name: "Pasta", quantity: 1 },
];

const paymentMethods = ["Credit Card", "UPI", "Wallet"];

checkRestaurant()
  .then((res) => {
    console.log(res);
    return placeOrder(itemsToOrder);
  })
  .then((orders) => {
    console.log(
      "Orders placed:",
      itemsToOrder.map((i) => i.name)
    );
    return prepareFood(itemsToOrder.map((i) => i.name));
  })
  .then(() => {
    console.log("All food prepared!");
    return deliverFood(itemsToOrder.map((i) => i.name));
  })
  .then((results) => {
    console.log("Delivery results:", results);
    return processPayments(paymentMethods);
  })
  .then((firstPayment) => {
    console.log("First payment completed:", firstPayment);
    console.log("Order successfully completed!");
  })
  .catch((err) => {
    console.error("Error occurred:", err);
  });
