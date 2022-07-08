import styled from 'styled-components';

const StyledAbout = styled.section`
    text-align: center;
    padding: 1rem;

    h1 {
    color: orange;
    margin:1rem 0 1rem;
    }

    main {
        display: grid;
        grid-template-columns: auto;
    }

    h3{
        color: rgb(130, 219, 27);
        padding-bottom: .3rem;
        border-bottom: 1px solid rgb(130, 219, 27);
        width: max-content;
        margin: 1rem auto;
    }

    ul {
        margin-bottom: 2rem;
        list-style-type: none;
    }

    li {
        padding: .3rem;
    }

    a{
        text-decoration: none;
        color: #000;
    }

    a:hover{
        color: orangered;
    }
`;

export default StyledAbout;




