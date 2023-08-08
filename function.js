function a(b) {
  return b;
}

console.log(a("b"));

// function tes() {
//   return tes();
// }

// tes();

function recursive(n) {
  console.log(n);
  if (n === -100) return;

  recursive(n - 1);
}

recursive(10);

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
