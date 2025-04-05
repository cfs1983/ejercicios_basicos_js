const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  const duplicates2 = ["cosa1", "cosa2", "cosa3", "cosa1", "cosa3", "cosa4", "cosa2", "cosa4"];

  function removeDuplicates(list) {
    // Completar
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] === list[j]) {
                list.splice(j, 1);
                j--;
            }
        }
    }
    return list;
  }
    console.log(removeDuplicates(duplicates)); 
    console.log(removeDuplicates(duplicates2));