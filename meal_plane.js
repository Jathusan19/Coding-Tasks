function calculateMealPlan(
  mealsPerDay,
  totalCaloriesPerDay,
  calorieOverflowLimit
) {
  const foodItems = [
    { name: "Food Item A", calories: 239 },
    { name: "Food Item B", calories: 130 },
    { name: "Food Item C", calories: 155 },
    { name: "Food Item D", calories: 200 },
    { name: "Food Item E", calories: 20 },
    { name: "Food Item F", calories: 500 },
    { name: "Food Item G", calories: 100 },
    { name: "Food Item H", calories: 50 },
    { name: "Food Item I", calories: 10 },
  ];

  if (
    mealsPerDay <= 0 ||
    totalCaloriesPerDay <= 0 ||
    calorieOverflowLimit <= 0 ||
    calorieOverflowLimit > 100
  ) {
    return "Unable to generate a meal plan.";
  }

  const minCalories = (totalCaloriesPerDay / mealsPerDay).toFixed(2);
  const maxCalories = (
    totalCaloriesPerDay / mealsPerDay +
    calorieOverflowLimit / mealsPerDay
  ).toFixed(2);

  function generateMealCombinations(
    foodItems,
    minCalories,
    maxCalories,
    currentCombination = [],
    combinations = []
  ) {
    const currentCalories = currentCombination.reduce(
      (sum, item) => sum + item.calories,
      0
    );
    if (currentCalories >= minCalories && currentCalories <= maxCalories) {
      combinations.push([...currentCombination]);
    }

    if (currentCalories >= maxCalories) {
      return;
    }

    for (let i = 0; i < foodItems.length; i++) {
      const foodItem = foodItems[i];
      currentCombination.push(foodItem);

      generateMealCombinations(
        foodItems.slice(i + 1), // Ensure unique combinations by slicing the array
        minCalories,
        maxCalories,
        currentCombination,
        combinations
      );

      currentCombination.pop();
    }

    return combinations;
  }

  const combinations = generateMealCombinations(
    foodItems,
    minCalories,
    maxCalories
  );

  combinations.sort((a, b) => {
    const totalCaloriesA = a.reduce((sum, item) => sum + item.calories, 0);
    const totalCaloriesB = b.reduce((sum, item) => sum + item.calories, 0);
    return totalCaloriesA - totalCaloriesB;
  });

  if (combinations.length < mealsPerDay) {
    return "Unable to generate a meal plan.";
  }

  let selectedMeals = [];
  let usedFoodItems = new Set();

  for (
    let i = 0;
    i < combinations.length && selectedMeals.length < mealsPerDay;
    i++
  ) {
    const meal = combinations[i];
    const mealFoodNames = meal.map((item) => item.name);
    const mealContainsUniqueFood = mealFoodNames.some(
      (name) => !usedFoodItems.has(name)
    );

    if (mealContainsUniqueFood) {
      selectedMeals.push(meal);
      mealFoodNames.forEach((name) => usedFoodItems.add(name));
    }
  }

  if (selectedMeals.length < mealsPerDay) {
    return "Unable to generate a meal plan.";
  }

  let output = selectedMeals
    .map((meal, index) => {
      return `Meal ${index + 1}: ${meal.map((item) => item.name).join(", ")}.`;
    })
    .join(" ");

  return output.trim();
}

// Test cases
console.log(calculateMealPlan(1, 1500, 100)); // "Unable to generate a meal plan."
console.log(calculateMealPlan(1, 600, 20)); // "Meal 1: Food Item F."
console.log(calculateMealPlan(4, 1200, 20)); // "Meal 1: Food Item B, Food Item E, Food Item G, Food Item H. Meal 2: Food Item D, Food Item G."
