// `src/components/BurgerStack.jsx`
import Ingredient from "../Ingredient/Ingredient.jsx"

const BurgerStack = ({ stack }) => {
    return <>
        <ul>
            {stack.map( (ingredient, index) => (
                <Ingredient key={index} {...ingredient} buttonText='X' />
            ))}
        </ul>
    </>
}

export default BurgerStack
