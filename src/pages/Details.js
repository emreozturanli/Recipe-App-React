import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { DetailsMain, LeftInfo, RightInfo, StyledDetails } from '../styles/Details.styled';

const Details = () => {
  const {label} = useParams();
  const {state} = useLocation()

  
  return (
    <StyledDetails>
      <h1>{state.recipe.label}</h1>
      <DetailsMain>
        <img src={state.recipe.image} alt={state.recipe.label} />
        <LeftInfo>
          <h3>Nutrients</h3>
          <ul>
            <li><span>Energy : </span>{state.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(0)} kcal</li>
            <li><span>Fat : </span>{state.recipe.totalNutrients.FAT.quantity.toFixed(0)} kcal</li>
            <li><span>Carbs : </span>{state.recipe.totalNutrients.CHOCDF.quantity.toFixed(0)} kcal</li>
            <li><span>Protein : </span>{state.recipe.totalNutrients.PROCNT.quantity.toFixed(0)} kcal</li>
            <li><span>Cholesterol : </span>{state.recipe.totalNutrients.CHOLE.quantity.toFixed(0)} kcal</li>
          </ul>
        </LeftInfo>
        <RightInfo>
          <ol>
            {
              state.recipe.ingredientLines.map((e,i)=>{
                return <li key={i}>{e}</li>
              })
            }
          </ol>
        </RightInfo>
      </DetailsMain>
      <Link to='/home'><button>Home</button></Link>
    </StyledDetails>
  )
}

export default Details