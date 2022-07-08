import styled from 'styled-components';

export const StyledLogin= styled.div`
  text-align:center;
  height:80vh;
  padding:1rem;
  display:grid;
  place-items:center;
  h1{
    color: orangered;
  }
  h2{
    color: #91b2cb;
    font-size: 2.5rem;
  }
`;

export const LoginInfo = styled.div`
  margin-top:3rem;
  padding: 2rem;
  background-color: #fff;
  border-radius:10px;
  box-shadow: 0 0 5px 10px #fff;

  input{
    display:block;
    margin:1rem auto;
    padding:.4rem;
    border: none;
    outline: none;
    font-size:1.2rem;
    border-bottom: 2px solid red;
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

export const LoginImage = styled.img`
  width:200px;
`;


