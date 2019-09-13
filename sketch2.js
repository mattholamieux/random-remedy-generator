let recipeLineZero;
let recipeLineOne;
let recipeLineTwo;
let recipeLineThree;
let recipeLineFour;
let recipeLineFive;
let recipeLineSix;

function setup() {
  createCanvas(800, 500);
  recipeLineZero = 'A remedy for ' + ingredients.randomThing(ingredients.ailments);
  recipeLineOne = '*' + ingredients.randomAmount() + ' ' + ingredients.randomThing(ingredients.measurements) + ' of ' + ingredients.randomThing(ingredients.liquids);
  recipeLineTwo = '*' + ingredients.randomAmount() + ' ' + ingredients.randomThing(ingredients.measurements) + ' of ' + ingredients.randomThing(ingredients.foods);
  recipeLineThree = '*' + ingredients.randomAmount() + ' ' + ingredients.randomThing(ingredients.measurements) + ' of ' + ingredients.randomThing(ingredients.foods);
  recipeLineFour = ingredients.randomThing(ingredients.verbs) + ' for ' + Math.floor(Math.random() * 100) + ' minutes';
  recipeLineFive = 'Add a ' + ingredients.randomThing(ingredients.weirdAmounts) + ' of ' + ingredients.randomThing(ingredients.foods);
  recipeLineSix = 'Serve in ' + ingredients.randomThing(ingredients.receptacles);
}

function draw() {
  background(218, 46, 170);
  stroke(0);
  strokeWeight(4);
  fill(169, 230, 57);
  textSize(32);
  text(recipeLineZero, 100, 70);
  textSize(24);
  text('1. Mix:', 100, 130);
  text(recipeLineOne, 150, 170);
  text(recipeLineTwo, 150, 200);
  text(recipeLineThree, 150, 230);
  text('2. ' + recipeLineFour, 100, 270);
  text('3. ' + recipeLineFive, 100, 310);
  text('4. ' + recipeLineSix, 100, 350);
  text('5. Enjoy!', 100, 390);

}

let ingredients = {
  ailments: ['Ted Talk pseudo-science', 'an overflowing email inbox', 'underwhelming social media likes', 'late night Amazon purchasing', 'targeted online advertising', 'misdirected twitter rants', 'fear of missing out', 'too much birthday', 'excessive screen time', 'carbon footprint guilt', 'dying houseplants', '"is this wine still good?"'],
  measurements: ['teaspoons', 'tablespoons', 'cups', 'quarts', 'ounces', 'gallons'],
  liquids: ['almond milk', 'nacho cheese sauce', 'chocolate syrup', 'coconut water', 'sprite', 'soft-serve ice cream', 'whiskey', 'red bull'],
  foods: ['pure cane sugar', 'cashew butter', 'kimchee', 'dry farmed tomatoes', 'fava bean flour', 'cream cheese', 'sardines', 'bacon', 'taco seasoning', 'sour gummi worms', 'takis', 'red bean paste'],
  verbs: ['Boil', 'Bake', 'Refrigerate', 'Shake vigorously', 'Simmer'],
  weirdAmounts: ['pinch', 'dollop', 'heaping spoonful', 'handful'],
  receptacles: ['a plastic champagne flute', 'an empty La Croix can', 'an old iphone case', 'an Ugg boot', 'your most recent Amazon delivery packaging', 'a plastic nalgene', 'your most valuable tupperware container', 'a trader joes paper bag', 'a cutesy bowl shaped like a fruit'],

  randomAmount: function() {
    let amount = Math.floor(Math.random() * 10) + 2;
    return amount;
  },
  randomThing: function(what) {
    let thing = what[Math.floor(Math.random() * what.length)];
    return thing;
  }
};
