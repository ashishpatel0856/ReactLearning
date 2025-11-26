import React from 'react'
import { useLocation } from 'react-router-dom'
import UseFetch from '../../hooks/UseFetch';
import UsewindowResize from '../../hooks/UsewindowResize';


//uselocatstorage
//useCounter
//useSessionStroag
//useId          
//useOutsideClick


const RecipeList = () => {
    const location = useLocation();
    const { data, loading, error } = UseFetch(
        "https://dummyjson.com/recipes"
    );

    const windowSize = UsewindowResize();
    if (loading) return <h1>Fetching recipes, please wait...</h1>;
    if (error) return <h1>Error loading recipes</h1>;

    return ( 
        <div>
            {/* <h1 style={{color : windowSize.width<768 ? 'red':'black'}}>Recipe List Page</h1> */}
            <h1 className={windowSize.width < 768 ? "text-red-500" : "text-black"}>
  Recipe List Page
</h1>
     <h3>current window width is {windowSize.width} and current height is {windowSize.height} </h3>
            <ul>
                {data?.recipes?.length > 0 ? (
                    data.recipes.map(recipeItem => (
                        <li key={recipeItem.id}>
                            <img src={recipeItem.image} alt={recipeItem.name} />
                            <label>{recipeItem.name}</label>
                        </li>
                    ))
                ) : (
                  <p>No recipes found</p>
                )}
            </ul>
        </div>
    );
}

export default RecipeList;
