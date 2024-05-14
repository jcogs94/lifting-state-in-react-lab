// `src/components/BurgerStack.jsx`
import Ingredient from "../Ingredient/Ingredient.jsx"

const BurgerStack = ({ stack, handleButton }) => {
    return <>
        <ul>
            {stack.map( (ingredient, index) => (
                <Ingredient key={index}
                    {...ingredient} buttonText='X'
                    handleButton={handleButton}
                    index={index}
                />
            ))}
        </ul>
    </>
}

export default BurgerStack
