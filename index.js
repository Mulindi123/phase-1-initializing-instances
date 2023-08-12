class Breakfast{
    constructor(food, drink){
    this.food = food;
    this.drink = drink;
    }
}

class Lunch{
    constructor(salad, soup, drink){
    this.salad = salad;
    this.drink= drink;
    this.soup = soup;
    }
}

class Dinner extends Lunch{
    #dessert;
    constructor(salad, soup, entree, dessert){
        super(salad,soup);
        this.entree = entree;
        this.#dessert= dessert;
        
    }
}

let breakfast = new Breakfast("Nduma","coffee");
console.log(breakfast);
let lunch = new Lunch("fruit salad", "pumpkin soup","tea");
console.log(lunch);
let dinner = new Dinner("vegetables","lentiles","ice cream", "mousse");
console.log(dinner)