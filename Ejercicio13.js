const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList) {

    for (let i = 0; i < nameList.length; i++) {
      if (nameList[i] === nombre) {
        return [true, i];
  }
}
    return [false,];
}
console.log(nameFinder(names, 'Steve')); // [true, 1]
console.log(nameFinder(names, 'Marc')); // [true, 10]
console.log(nameFinder(names, 'Clint')); // [false]
