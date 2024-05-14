// src/components/IngredientList.jsx
import Ingredient from "../Ingredient/Ingredient.jsx";
import { availableIngredients } from "./availableIngredients.jsx"

const IngredientList = () => {
    return <>
        <ul>
            {availableIngredients.map( (ingredient, index) => (
                <Ingredient key={index} {...ingredient} buttonText='+' />
            ))}
        </ul>
    </>
}
  
export default IngredientList;
