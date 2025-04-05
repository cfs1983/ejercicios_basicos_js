const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  function repeatCounter(list) {
    // Completar
    let count = {};
    list.forEach((word) => {
        if (count[word]) {
            count[word]++;
        } else {
            count[word] = 1;
        }
    });
    return count;
     
  }
    console.log(repeatCounter(words));

    const words2 = [
        "code", "repeat", "eat", "sleep", "code", "enjoy", "sleep", "code",
        "coche", "casa", "coche", "casa", "coche", "casa", "coche", "casa",
        "botella", "boligrafo", "botella", "boligrafo", "botella", "boligrafo",];

        console.log(repeatCounter(words2));