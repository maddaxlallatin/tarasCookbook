
import React, { useState, useEffect } from 'react';
import RecipeItem from "./RecipeItem";
import api from '../axiosConfig';
import axios from 'axios';

function Recipes() {
  const [appitizerRecipes, setAppitizerRecipes] = useState([]);
  useEffect(() => {
    api.get("/recipes/category/Appitizers and Beverages").then((response) => {
      setAppitizerRecipes(response.data);


    }).catch((error) => {
    });
  }, []);

  const [breadRecipes, setBreadRecipes] = useState([]);
  useEffect(() => {
    api.get("/recipes/category/bread").then((response) => {
      setBreadRecipes(response.data);


    }).catch((error) => {
    });
  }, []);
  const [soupRecipes, setSoupRecipes] = useState([]);
  useEffect(() => {
    api.get("/recipes/category/soup").then((response) => {
      setSoupRecipes(response.data);


    }).catch((error) => {
    });
  }, []);
  const [mainRecipes, setMainRecipes] = useState([]);
  useEffect(() => {
    api.get("/recipes/category/main").then((response) => {
      setMainRecipes(response.data);


    }).catch((error) => {
    });
  }, []);
  const [vegetableRecipes, setVegetableRecipes] = useState([]);
  useEffect(() => {
    api.get("/recipes/category/vegetables").then((response) => {
      setVegetableRecipes(response.data);


    }).catch((error) => {
    });
  }, []);
  const [dessertRecipes, setDessertRecipes] = useState([]);
  useEffect(() => {
    api.get("/recipes/category/dessert").then((response) => {
      setDessertRecipes(response.data);


    }).catch((error) => {
    });
  }, []);
  const [otherRecipes, setOtherRecipes] = useState([]);
  useEffect(() => {
    api.get("/recipes/category/other").then((response) => {
      setOtherRecipes(response.data);


    }).catch((error) => {
    });
  }, []);



  return (
    <div className="flex flex-wrap flex-col justify-center items-center font-bold">
      <div className=' text-goldenrod font-montserrat text-7xl pb-20 scroll-my-20'  id="appitizers">{appitizerRecipes.length?`Appitizers and Beverages`:""}</div>
      {appitizerRecipes.map((recipe) => (
        <RecipeItem
          name={recipe.recipeName}
          ingredients={recipe.recipeIngredients}
          directions={recipe.recipeInstructions}
          category={recipe.recipeCategory}
          image={recipe.recipeImage}
        />
      ))}
     <div className=' text-goldenrod font-montserrat text-7xl pb-20 scroll-my-20' id='bread'>{breadRecipes.length?"Bread and Muffins":""}</div>
      {breadRecipes.map((recipe) => (
        <RecipeItem
          name={recipe.recipeName}
          ingredients={recipe.recipeIngredients}
          directions={recipe.recipeInstructions}
          category={recipe.recipeCategory}
          image={recipe.recipeImage}
        />
      ))}
     <div className=' text-goldenrod font-montserrat text-7xl pb-20 scroll-my-20' id='soup'>{soupRecipes.length?`Soups, & Salads`:""}</div> 
      {soupRecipes.map((recipe) => (
        <RecipeItem
          name={recipe.recipeName}
          ingredients={recipe.recipeIngredients}
          directions={recipe.recipeInstructions}
          category={recipe.recipeCategory}
          image={recipe.recipeImage}
        />
      ))}
      <div className=' text-goldenrod font-montserrat text-7xl pb-20 scroll-my-20' id='main'>{mainRecipes.length?`Main Courses`:""}</div>
      {mainRecipes.map((recipe) => (
        <RecipeItem
          name={recipe.recipeName}
          ingredients={recipe.recipeIngredients}
          directions={recipe.recipeInstructions}
          category={recipe.recipeCategory}
          image={recipe.recipeImage}
        />
      ))}
      
      <div className=' text-goldenrod font-montserrat text-7xl pb-20 scroll-my-20' id='vegetable'>{vegetableRecipes.length?"Vegetable Dishes":""}</div>
      {vegetableRecipes.map((recipe) => (
        <RecipeItem
          name={recipe.recipeName}
          ingredients={recipe.recipeIngredients}
          directions={recipe.recipeInstructions}
          category={recipe.recipeCategory}
          image={recipe.recipeImage}
        />
      ))}
      <div className=' text-goldenrod font-montserrat text-7xl pb-20 scroll-my-20' id='desser'>{dessertRecipes.length?`Desserts, Pies, Cakes and Cookies`:""}</div>
      {dessertRecipes.map((recipe) => (
        <RecipeItem
          name={recipe.recipeName}
          ingredients={recipe.recipeIngredients}
          directions={recipe.recipeInstructions}
          category={recipe.recipeCategory}
          image={recipe.recipeImage}
        />
      ))}
      <div className=' text-goldenrod font-montserrat text-7xl pb-20 scroll-my-20' id='other'>{otherRecipes.length?Other:""}</div>
      {otherRecipes.map((recipe) => (
        <RecipeItem
          name={recipe.recipeName}
          ingredients={recipe.recipeIngredients}
          directions={recipe.recipeInstructions}
          category={recipe.recipeCategory}
          image={recipe.recipeImage}
        />
      ))}


    </div>
  );
}

export default Recipes;