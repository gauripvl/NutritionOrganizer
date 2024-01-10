import React from "react";
import RecipeCard from "../components/RecipeCard.jsx";



export default function Recipes() {


    const recipes = [
        {
            img_src: "images/recipes/chana-masala.jpeg",
            name: "Chana Masala",
            detail: "Lorem Ipsum Gipsum hello pico",
            path: "/chana_masala"
        },
        {
            img_src: "images/recipes/dosa.jpeg",
            name: "Dosa",
            detail: "Lorem Ipsum Gipsum hello pico"
        },
        {
            img_src: "images/recipes/fried-rice.jpeg",
            name: "Fried Rice",
            detail: "Lorem Ipsum Gipsum hello pico"
        },
        {
            img_src: "images/recipes/gochujang-pasta.jpeg",
            name: "Gochujang Pasta",
            detail: "Lorem Ipsum Gipsum hello pico"
        },
        {
            img_src: "images/recipes/idli.jpeg",
            name: "Idli",
            detail: "Lorem Ipsum Gipsum hello pico"
        },
        {
            img_src: "images/recipes/japanese-curry.jpeg",
            name: "Japanese Curry",
            detail: "Lorem Ipsum Gipsum hello pico"
        },
        {
            img_src: "images/recipes/malai-kofta.jpeg",
            name: "Coconut Malai Kofta",
            detail: "Lorem Ipsum Gipsum hello pico",
            path:"/malai_kofta"
        },
        {
            img_src: "images/recipes/okra-curry.jpeg",
            name: "Okra Curry",
            detail: "Lorem Ipsum Gipsum hello pico"
        },
        {
            img_src: "images/recipes/rajmah.jpeg",
            name: "Rajmah Masala",
            detail: "Lorem Ipsum Gipsum hello pico"
        },
        {
            img_src: "images/recipes/sambhar.jpeg",
            name: "Sambhar",
            detail: "Lorem Ipsum Gipsum hello pico"
        },
        {
            img_src: "images/recipes/silken-squash.jpeg",
            name: "Silken Squash",
            detail: "Lorem Ipsum Gipsum hello pico"
        },
        {
            img_src: "images/recipes/soft-tofu-soup.jpeg",
            name: "Soondubu Jjigae",
            detail: "Lorem Ipsum Gipsum hello pico"
        },
        {
            img_src: "images/recipes/spinach-dal.jpeg",
            name: "Spinach Dal",
            detail: "Lorem Ipsum Gipsum hello pico"
        },
        {
            img_src: "images/recipes/malai-kofta.jpeg",
            name: "Coconut Malai Kofta",
            detail: "Lorem Ipsum Gipsum hello pico",
            path: "/malai_kofta"
        },
        {
            img_src: "images/recipes/kadhi.jpeg",
            name: "Kadhi",
            detail: "Lorem Ipsum Gipsum hello pico"
        },
        {
            img_src: "images/recipes/tofu-curry.jpeg",
            name: "Tofu Curry",
            detail: "Lorem Ipsum Gipsum hello pico"
        },
        {
            img_src: "images/recipes/tomato-cauliflower.jpeg",
            name: "Tomato Cauliflower",
            detail: "Lorem Ipsum Gipsum hello pico"
        },
        {
            img_src: "images/recipes/veggie-burger.jpeg",
            name: "Veggie Burger",
            detail: "Lorem Ipsum Gipsum hello pico"
        },
        {
            img_src: "images/recipes/veggie-pasta.jpeg",
            name: "Veggie Pasta",
            detail: "Lorem Ipsum Gipsum hello pico"
        },
        {
            img_src: "images/recipes/veggie-pizza.jpeg",
            name: "Veggie Pizza",
            detail: "Lorem Ipsum Gipsum hello pico"
        },

    ];

    return (<div>
        <div className="recipes-container">
            {recipes.map((recipe, index) => <RecipeCard key={index} recipe={recipe}/>)}

        </div>
    </div>)
}

