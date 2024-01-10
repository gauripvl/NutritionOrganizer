import CustomImage from "./CustomImage.jsx";
import {useNavigate} from 'react-router-dom';

export default function RecipeCard({recipe}) {

    const navigate = useNavigate();
    const routeChange = (path) => {
        // let path="/planner";
        navigate(path);
    }


    return (<div className="recipe-card">
        <CustomImage imgSrc={recipe.img_src} pt="0%"/>
        <div className="recipe-card-info">
            <p className="recipe-title"> {recipe.name} </p>
            <p className="recipe-desc"> {recipe.detail}</p>
            <a className="view-btn" href={recipe.path}>VIEW RECIPE</a>
        </div>
    </div>)

}