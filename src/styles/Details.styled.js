import styled from 'styled-components';

export const StyledDetails = styled.article`
  h1{
    color: #91b2cb;
    text-align:center;
    padding: 1rem;
  }

  a{
    text-decoration:none;
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
`;
export const DetailsMain = styled.main`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:2rem;
    
    img{
        border-radius:30px;
    }

`;
export const LeftInfo = styled.div`
    h3{
        text-align:center;
        margin-bottom:1rem;
        color: #91b2cb;
    }
    span{
        color: orangered;
    }
`;
export const RightInfo = styled.div`
    padding:1rem;
    ol{
        padding:0 1rem;
       
    }
`;



