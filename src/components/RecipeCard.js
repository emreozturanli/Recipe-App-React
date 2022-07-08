import {useNavigate } from 'react-router-dom';
import { StyledRecipeCard } from '../styles/Home.styled';

const RecipeCard = ({recipe}) => {
const navigate = useNavigate()
const handleClick = () =>{
  navigate('/details/'+recipe.label, {state:{recipe}})
}

  return (
    <StyledRecipeCard>
        <h3>{recipe.label}</h3>
        <img src={recipe.image} alt={recipe.label} />
        <button onClick={handleClick}>Details</button>
    </StyledRecipeCard>
  )
}

export default RecipeCard
