import styled from "styled-components";

export const StyledPostCard = styled.div`
width: 500px;
height: 450px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    margin-bottom: 2em;
    border-radius: 10px;
    font-weight: 500;

    & > img{
        width: 500px;
        height: 300px;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    } 
`;

export const StyledPostFirstContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 16px;

    & > img{
        width: 40px;
        height: 40px;
        object-fit: cover;
        border: 2px solid #673AB7;
        border-radius: 50%;
    }

    &>p{
        padding: .3em;
        padding-right: .7em;
        padding-left: .7em;
        margin-left: .3em;
        border-radius: .5em;
        background-color: #512DA8;
        color:white;
        font-size: 1em;
    }

`;

export const Text = styled.div`
    padding: 16px 16px 0px 16px;
`;

export const StyledPostSecondContainer = styled.div`
        width: 100%;
        display: flex;
        padding: 16px;

    & > div{
        display: flex;
        margin-right: auto;
    }

    & > div > p{
        margin-left: .3em;
    }
`;