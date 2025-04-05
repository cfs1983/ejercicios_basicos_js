const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
 
 let frutas = 0;
 for (let i = 0; i < foodSchedule.length; i++) {
        if (fruits.length== frutas) {
            console.log(`La fruta ${fruits[i]} es vegana`);
        } 
        else 
        if (foodSchedule[i].isVegan === false) {
            foodSchedule[i].name = "No vegano";
            foodSchedule[i].isVegan = true;
            fruits++;
        }
    }
console.log(foodSchedule);
