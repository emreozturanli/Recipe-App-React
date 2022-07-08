import styled from 'styled-components';

export const StyledMain = styled.main`
    max-width: 1100px;
    margin:auto;
    text-align:center;
    h1{
        margin-top:1rem;
        color:#91b2cb;
    }
    form{
        padding:1rem;
        text-align:center;

        input,select{
        display:block;
        margin:1rem auto;
        padding:.4rem;
        border: none;
        outline: none;
        font-size:1.2rem;
        border-radius: 10px;
    }

        button{
        font-size: 1rem;
        padding-inline: .8rem;
        border: none;
        outline: none;
        border-radius: 10px;
        cursor: pointer;
        height: 2rem;
        display: block;
        margin: auto;
        background-color:yellowgreen;
        }
    }
`;

export const Recipes = styled.section`
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1rem;

    @media (min-width: 600px) {
        flex-direction:row;
    }
`;

export const StyledRecipeCard = styled.div`
    text-align:center;
    padding: 1rem;
    background-color:#fff;
    border-radius:10px;
    width:330px;
    a{
        text-decoration:none;
    }
    h3{
        color:#ca2500;
        height: 70px;
    }

    img{
        display:block;
        border-radius:30px;
        margin: 1rem 0;
    }

    button{
        font-size: 1rem;
        padding-inline: .8rem;
        border: none;
        outline: none;
        border-radius: 10px;
        cursor: pointer;
        height: 2rem;
        display: block;
        margin: auto;
        background-color:#91b2cb;
        color:#fff;

        &:hover{
            background-color:orange;
        }
        }
`;


