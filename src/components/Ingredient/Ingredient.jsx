const Ingredient = ({ color, name }) => {
    return <>
        <li style={{ backgroundColor: `${color}` }} >{name}</li>
    </>
}

export default Ingredient
