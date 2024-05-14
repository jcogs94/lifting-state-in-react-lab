const Ingredient = ({ color, name, buttonText }) => {
    return <>
        <li style={{backgroundColor: `${color}`}}>
            {name}
            <button>{buttonText}</button>
        </li>
    </>
}

export default Ingredient
