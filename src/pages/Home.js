import axios from 'axios';
import {  useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Recipes, StyledMain } from '../styles/Home.styled';
import Error from './Error';

const appId = 'a864e07d';
const appKey = 'b4c3995161f660911c12fd38c3096d52';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [mealType, setMealType] =useState('breakfast');
  const [query, setQuery] = useState('chicken'); 
  const [isLoading, setIsLoading] = useState(false)

  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&mealType=${mealType}`;

  const getRecipes = async ()=>{
    try {
        const {data} = await axios.get(url);
        setRecipes(data.hits)
        setIsLoading(false)
    } catch (error) {
      return  <Error/>
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsLoading(true)
    getRecipes()
  }

  return (
    <StyledMain>
      <h1>Delicious Recipes for You</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="query" 
        id="query" 
        value={query} 
        onChange={(e)=>setQuery(e.target.value)}
        />
        <select 
        name="mealType" 
        id="mealType" 
        onChange={(e)=>setMealType(e.target.value)}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
          <option value="Snack">Snack</option>
          <option value="Teatime">Teatime</option>
        </select>
        <button>Search</button>
      </form>

      <Recipes>
        {
        isLoading ? <h1>Loading...</h1> : 
          recipes.map((item,index)=>{
            return <RecipeCard key={index} recipe={item.recipe}/>
          })
        }
      </Recipes>
    </StyledMain>
  )
}

export default Home