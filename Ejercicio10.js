const numbers = [12, 21, 38, 5, 45, 37, 6];
const numbers2 = [56, 32, 23, 12, 5, 6, 7];
function average(numberList) {
  // Completar
    let suma = 0;
    for (let i = 0; i < numberList.length; i++) {
        suma += numberList[i];
    }
    return suma / numberList.length;
}
console.log(average(numbers)); // 19.714285714285715
console.log(average(numbers2)); // 18.714285714285715