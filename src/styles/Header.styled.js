import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  padding: 1rem;
`;

export const StyledNav = styled.nav`
    max-width:1100px;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:50px;

    span{
        cursor:pointer;
    }

    h1{
        color:orangered;
    }
    
    ul{
        flex-direction:column;
        align-items:center;
        justify-content:center;
        position:absolute;
        left:0;
        top:0;
        transform: translate(-50%, -50%);
        margin:auto;
        transform: scale(0);
        width:100%;
        height:100%;
        border: 30px solid rgba(0,0,0,0.3);
        background-color: #fff;
        font-size: 2rem;
        /* transition: all .3s ease-in;  */

        li{
            padding:2rem;
            a{
                color:#000;
                text-decoration:none;
    
                &:hover{
                    color:orangered;
                }
            }
        }
    }

    .active{
    color:orange;
    }

    .open{
        display:flex;
        transform: scale(1);
        transition: all .3s ease-in; 
    }


    @media (min-width:600px){
        span{
            display:none;
        }

        ul{
        display: flex;
        flex-direction:row;
        align-items:center;
        gap: 2rem;
        position:relative;
        transform: scale(1);
        width:max-content;
        height:max-content;
        background-color: transparent;
        margin:0;
        font-size: 1rem;
        border:none;
        

        li{
            padding:0;
            a{
                color:#000;
    
                &:hover{
                    color:orangered;
                }
            }
        }

        }
    }
`;

export const StyledSpan = styled.span`
    position:absolute;
    right: 30px;
    top:30px;
`;


