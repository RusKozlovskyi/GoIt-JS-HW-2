const logItems = function (array) {
  let numberElement = 0;

  for (const arr of array) {
    numberElement += 1;
    console.log(`${numberElement} - ${arr}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
