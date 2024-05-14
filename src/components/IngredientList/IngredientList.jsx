// src/components/IngredientList.jsx
import Ingredient from "../Ingredient/Ingredient.jsx";
import { availableIngredients } from "./availableIngredients.jsx"

const IngredientList = ({ handleButton }) => {
    return <>
        <ul>
            {availableIngredients.map( (ingredient, index) => (
                <Ingredient key={index}
                    {...ingredient} buttonText='+'
                    handleButton={handleButton}
                    index={index}
                />
            ))}
        </ul>
    </>
}
  
export default IngredientList;
