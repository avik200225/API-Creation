const mongoose = require('mongoose');
// Schema
const foodSchema = new mongoose.Schema({
    name: String,
    foodGroup: String,
    description: String,
    nutritionalInformation: {
      calories: Number,
      macronutrients: {
        proteins: Number,
        fats: Number,
        carbohydrates: Number,
      },
      micronutrients: {
        vitamins: [String],
        minerals: [String],
      },
      fiber: Number,
      sodium: Number,
      cholesterol: Number,
    },
    servingSize: String,
    allergens: [String],
    ingredients: [String],
    preparationMethods: [String],
    certifications: [String],
    countryOfOrigin: String,
    brandOrManufacturer: String,
    dietaryRestrictions: [String],
    healthBenefits: [String],
    bestPractices: String,
  });
  
  const Food = mongoose.model('Food', foodSchema);
  module.exports=Food;
  