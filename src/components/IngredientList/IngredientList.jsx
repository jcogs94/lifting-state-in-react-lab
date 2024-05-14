// src/components/IngredientList.jsx
import Ingredient from "../Ingredient/Ingredient.jsx";
import { availableIngredients } from "./availableIngredients.jsx"

const IngredientList = (props) => {
    return <>
        <ul>
            {availableIngredients.map( (ingredient, index) => (
                <Ingredient key={index} {...ingredient} />
            ))}
        </ul>
    </>
}
  
export default IngredientList;
