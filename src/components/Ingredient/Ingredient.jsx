const Ingredient = ({ color, name, buttonText,  handleButton, index }) => {
    return <>
        <li style={{backgroundColor: `${color}`}}>
            {name}
            <button onClick={() => handleButton(buttonText, index)}>{buttonText}</button>
        </li>
    </>
}

export default Ingredient
