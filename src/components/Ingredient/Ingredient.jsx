const Ingredient = ({ color, name, buttonText,  handleButton, index }) => {
    return <>
        <li style={{backgroundColor: `${color}`}}>
            {name}
            <button onClick={() => handleButton(name, buttonText, index)}>{buttonText}</button>
        </li>
    </>
}

export default Ingredient
