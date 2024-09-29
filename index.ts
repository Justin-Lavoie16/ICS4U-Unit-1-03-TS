/*
 * program checks time for pizza, sub, soup
 *
 * By: Justin Lavoie
 * Version 1.0
 * Since 2024-02-21
 */

import { createPrompt } from 'bun-promptx'

// Food options and their corresponding cook times in seconds
const foodOptions = {
  sub: 60,
  pizza: 45,
  soup: 105
}

// Prompt user to select a food item
const foodPrompt = createPrompt("Enter the food to microwave (sub, pizza, or soup): ")
const selectedFood = foodPrompt.value.toLowerCase()

// Check if the selected food is valid
if (!foodOptions.hasOwnProperty(selectedFood)) {
  console.log("Invalid food selected. Please choose either 'sub', 'pizza', or 'soup'.")
  console.log("\nDone.")
  process.exit(1)
}

// Prompt user to select the amount of food
const amountPrompt = createPrompt("Enter the number of items (1, 2, or 3): ")
const foodAmount = parseInt(amountPrompt.value)

// Check if the number of items is valid
if (isNaN(foodAmount) || foodAmount < 1 || foodAmount > 3) {
  console.log("Invalid number of items. Please enter a value between 1 and 3.")
  console.log("\nDone.")
  process.exit(1)
}

// Get base time for the selected food
const baseTime = foodOptions[selectedFood]

// Calculate total cook time based on food amount
const totalCookTime = baseTime * (1 + 0.5 * (foodAmount - 1))

// Convert total cook time into minutes and seconds
const minutes = Math.floor(totalCookTime / 60)
const seconds = Math.round(totalCookTime % 60)

// Output the result
console.log(`Total cook time for ${foodAmount} ${selectedFood}(s) is ${minutes} minute(s) and ${seconds} seconds.`)

console.log('\nDone.')

