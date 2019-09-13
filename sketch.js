let rec;

function setup() {
  createCanvas(600, 600);
  rec = new Recipe;
  background(229, 0, 255);
  stroke(0);
  strokeWeight(4);
  fill(255);
  textSize(24);
  text('My Super Delicious Recipe:', 100, 50);
  rec.displayRecipe(100, 100);
}



class Recipe {
  constructor() {
    this.ailments = ['Ted Talk pseudo-science', 'mounting email debt', 'underwhelming social media likes', 'late night Amazon addiction', 'targeted online advertising']
    this.measures = ['teaspoon', 'tablespoon', 'cup', 'quart', 'ounce', 'gallon'];
    this.liquids = ['milk', 'nacho cheese sauce', 'chocolate syrup', 'water', 'sprite', 'soft-serve ice cream', 'whiskey', 'red bull'];
    this.foods = ['sugar', 'butter', 'bananas', 'flour', 'cheese', 'sardines', 'bacon', 'taco seasoning', 'sour gummi worms', 'fritos', 'bean paste'];
    this.other = ['twitter rant', 'fomo', 'morning edition', 'Carly Rae Jepson', 'Delta sky-miles', 'Facebook Messenger','Adobe Flash'];
  }

  createRecipe() {
    this.amount = Math.floor(random(1, 10));
    this.measure = this.measures[Math.floor(Math.random() * this.measures.length)];
    this.food = this.foods[Math.floor(Math.random() * this.foods.length)];
  }

  displayRecipe(x, y) {
    stroke(0);
    strokeWeight(4);
    fill(255);
    textSize(18);
    text(this.amount + ' ' + this.measure + 's of' + ' ' + this.food, x, y);
  }
}
