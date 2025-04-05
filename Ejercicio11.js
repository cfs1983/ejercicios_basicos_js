const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
const mixedElements2 = [3, 2, 'Batman', 15, 'pizza', 5, 'Spiderman', 8, 'cosa'];

function averageWord(list) {
  let suma = 0;
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'string') {
      suma += list[i].length;
    }
    else
    {
        suma += list[i];
    }
    return suma / list.length;  
 }
}
console.log(averageWord(mixedElements)); 
console.log(averageWord(mixedElements2)); 
