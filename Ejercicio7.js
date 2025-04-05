function greaterNumber(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    } 
    else if (numberTwo == numberOne) {
        return "Los numeros son iguales";
    }
    else {
        return numberTwo;
    }
}
console.log(greaterNumber(2, 4));
console.log(greaterNumber(115, 8));
console.log(greaterNumber(2, 2));
