import CustomImage from "./CustomImage.jsx";

export default function RecipePage({recipe}) {
    return (
        <div className="recipe-page">
            <h1>{recipe.name}</h1>
            <div className="line"></div>
            <CustomImage imgSrc={recipe.img_src} pt="10%"/>
            <h2>Ingredients</h2>
            {recipe.ingredients.map((ingredient, index) =>
                <div className="ingredients" key={index}>
                    <label>
                        <input type="checkbox"/> {ingredient}
                    </label>
                </div>
            )}
            <h2>Spices</h2>
            {recipe.spices.map((spice, index) =>
                <div className="ingredients" key={index}>
                    <label>
                        <input type="checkbox"/> {spice}
                    </label>
                </div>
            )}
            <h2> Instructions</h2>
            <div className="instructions">
            <ol>
            {recipe.instructions.map((instruction, index) =>
                <div className="ingredients" key={index}>

                        <li>{instruction}</li>

                </div>
            )}
            </ol>
            </div>


        </div>
    )
}