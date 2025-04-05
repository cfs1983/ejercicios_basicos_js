const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

let x =40;
let y = 11;
for (const element of placesToTravel) {
    if (element.id === x){
        console.log("Elemento encontrado", element.name);
        placesToTravel.splice(placesToTravel.indexOf(element), 1);
    }
    if (element.id === y){
        console.log("Elemento encontrado", element.name);
        placesToTravel.splice(placesToTravel.indexOf(element), 1);
    }
}
console.log(placesToTravel);
    