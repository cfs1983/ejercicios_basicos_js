const numbers = [1, 2, 3, 5, 45, 37, 58];
const numbers2 = [33, 43, 23, 12, 5, 6, 7];

function sumNumbers(numberList) {
  // Completar código
  let suma = 0;
  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i];
  }
  return suma;  
}
console.log(sumNumbers(numbers)); // 151
console.log(sumNumbers(numbers2)); // 126