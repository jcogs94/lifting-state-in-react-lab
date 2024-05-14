// `src/components/BurgerStack.jsx`
import Ingredient from "../Ingredient/Ingredient.jsx"

const BurgerStack = ({ stack, handleButton }) => {
    return <>
        <ul>
            {stack.length ? 
                stack.map( (ingredient, index) => (
                    <Ingredient key={index}
                        {...ingredient} buttonText='X'
                        handleButton={handleButton}
                        index={index}
                    />
                ))
                : <li>No ingredients</li>
            }
        </ul>
    </>
}

export default BurgerStack
