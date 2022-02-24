import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    color: white;
    height: 80px;
    background: rgb(43,65,117);
    background-color: linear-gradient(90deg, #673AB7, #512DA8);
    padding: 10px;
`;


export const Nav = styled.nav`
display: flex;
width: 100%;

    & > h1{
        margin-right: auto;
        margin-left: .5em;
    }

    & > ul   {
        display: flex;
        color: white;
        list-style: none;
        font-size: 1.2em;
    }

    & > ul > li {
        margin-right: 1em;
    }
    
    
    & > ul > li > a {
        color: white;
        text-decoration: none;
        padding: .5em;
    }

    & > ul > li > a:hover{
        background-color: white;
        color: #512DA8;
        border-radius: .5em;
}
`;


