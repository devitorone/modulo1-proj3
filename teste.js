var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 5 },
  { name: "Zeros", value: 37 },
];
items.sort((a, b) => {
 /* if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  // a must be equal to b
  return 0;
  */
  return a.value - b.value;
});

console.log(items);
