import styled from 'styled-components';

export const StyledError = styled.div`
    padding: 2rem;

    h4{
        text-align:center;
    }

    p{
        margin:1rem 0;
    }
    ul{
        list-style-type: circle;
        padding-left:1rem;
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
        margin: 1rem auto;
        background-color:yellowgreen;
    }
`;


