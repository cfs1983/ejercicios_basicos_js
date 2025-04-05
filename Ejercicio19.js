const toys = [
    {id: 5, name: 'Transformers'}, 
    {id: 11, name: 'LEGO'}, 
    {id: 23, name: 'Hot Wheels'}, 
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];
const juguetes=[]
let i=0;
for (const element of toys) {
    if (!element.name.includes('gato')) {
        juguetes[i]=element;
        i++;
    }
}
console.log(juguetes);
// El resultado es un array con los juguetes que no tienen gato en su nombre

for (let i = 0; i < toys.length; i++) {
    if (toys[i].name.includes('gato')) {
        toys.splice(i, 1);
        i--;
    }
}
console.log(toys);
// El resultado es un array con los juguetes que no tienen gato en su nombre