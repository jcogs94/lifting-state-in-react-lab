// src/App.jsx
import './App.css'
import { useState } from 'react'
import IngredientList from './components/IngredientList/IngredientList'
import BurgerStack from './components/BurgerStack/BurgerStack.jsx'

const App = () => {
  const [stack, setStack] = useState([])
  
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList />
        <BurgerStack />
      </section>
    </main>
  )
}

export default App
