// src/App.jsx
import './App.css'
import { useState } from 'react'
import { availableIngredients } from './components/IngredientList/availableIngredients.jsx'
import IngredientList from './components/IngredientList/IngredientList'
import BurgerStack from './components/BurgerStack/BurgerStack.jsx'

const App = () => {
  const [stack, setStack] = useState([])
  
  const handleButton = (ingredientName, buttonText, index) => {
    let newStack = [...stack]
    
    if (buttonText === '+') {
      newStack.push(availableIngredients[index])
    } else if (buttonText === 'X') {
      newStack.splice(index, 1)
    }
    
    setStack(newStack)
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList handleButton={handleButton} />
        <BurgerStack stack={stack} handleButton={handleButton} />
      </section>
    </main>
  )
}

export default App
