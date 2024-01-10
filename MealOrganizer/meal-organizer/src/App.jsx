import React, { Fragment } from "react";
import Navbar from "./components/Navbar.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes.jsx";
import Planner from "./pages/Planner.jsx";
import ShoppingList from "./pages/ShoppingList.jsx";
import {RecipeLists, MalaiKofta} from "./pages/recipe-pages/RecipeLists.jsx";



function App() {

    return (
        <Router>
             <Navbar/>
            <div className="container main">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/recipes" element={<Recipes/>}/>
                    <Route path="/planner" element={<Planner/>}/>
                    <Route path="/shop" element={<ShoppingList/>}/>
                    <Route path="/chana_masala" element={<RecipeLists/>}/>
                    <Route path="/malai_kofta" element={<MalaiKofta/>}/>
                </Routes>

            </div>
        </Router>

    );

}

export default App;