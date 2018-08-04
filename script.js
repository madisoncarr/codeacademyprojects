  let menu = {
    _courses: {
    appetizers: [], 
    mains: [], 
    desserts: []
  }, 
  // getter/setter methods
  get appetizers() {}, 
  set appetizers(appetizerIn) {}, 
  get mains() {}, 
  set mains(mainIn) {}, 
  get desserts() {}, 
  set desserts(dessertIn) {}, 
  
  get courses() {
    return {
      appetizers: this._courses.appetizers, 
      mains: this._courses.mains, 
      desserts: this._courses.desserts, 
    }
  }, 
  
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName, 
      price: dishPrice
    };
     this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const mathIndex = Math.floor(Math.random() * dishes.length);
    return dishes[mathIndex];
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
   	const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `You're eating ${appetizer.name}, ${main.name}, and ${dessert.name}. Your total is $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Pumpkin Pie', 6.10);
menu.addDishToCourse('appetizers', 'Jalapeño Poppers', 9.25);
menu.addDishToCourse('appetizers', 'Cheese Curds', 8.62);
menu.addDishToCourse('mains', 'Bear Meat', 61.00);
menu.addDishToCourse('mains', 'Boot Salad with Parsley', 29.32);
menu.addDishToCourse('mains', 'Not Your Fathers BBQ', 3.13);
menu.addDishToCourse('desserts', 'More Pie', 500.00);
menu.addDishToCourse('desserts', 'Red Velvet Cake', 225.00);
menu.addDishToCourse('desserts', 'Getty Pumpkin Dessert Wine (not for kids ;) )', 0.09);

const meal = menu.generateRandomMeal();
console.log(meal);






