const plantList = [
    'monstera',
    'ficus lyrata',
    'photos argenté',
    'yucca',
    'palmier',
    'tournesol'
]

function ShoppingList(){
    return(
        <ul>
            {plantList.map((plant) => (
                <li>{plant}</li>
            ))}
        </ul>
    )
}

export default ShoppingList