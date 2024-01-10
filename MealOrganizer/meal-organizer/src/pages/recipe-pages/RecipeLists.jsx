import RecipePage from "../../components/RecipePage.jsx";
export function RecipeLists(){
    const rcp = {
        name: "Chana Masala",
        ingredients: ["Onions", "Tomatoes"],
        spices: ["Cloves", "Cardammon", "Cinnamon"],
        instructions: ["loredm fkjefew", "fkjwenjkfgnwekg"],
        img_src: "images/recipes/chana-masala.jpeg"

    }
    return(
        <RecipePage recipe={rcp}></RecipePage>
    )

}
export function MalaiKofta(){
    const rcp = {
        name: "Malai Kofta",
        ingredients: ["Onions", "Tomatoes"],
        spices: ["Cloves", "Cardammon", "Cinnamon"],
        instructions: ["loredm fkjefew", "fkjwenjkfgnwekg"]
    }
    return(
        <RecipePage recipe={rcp}></RecipePage>
    )

}

