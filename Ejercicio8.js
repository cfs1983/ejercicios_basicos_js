const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList) {
  // Completar código
   let nombre = "";

    for (let i = 0; i < stringList.length; i++) {
        if (stringList[i].length > nombre.length) {
        nombre = stringList[i];
        }
    }
    return nombre;

}
console.log(findLongestWord(avengers));