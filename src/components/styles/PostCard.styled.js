import styled from "styled-components";

export const StyledPostCard = styled.div`
width: 500px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    margin-bottom: 2em;
    border-radius: 10px;
    font-weight: 500;

    & >  img{
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

    & > a > img{
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
        cursor: pointer;
        display: flex;
        margin-right: auto;
    }

    & > div > p{
        margin-left: .3em;
    }
`;

export const CommentsSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > button {
        width: 250px;
        height: 30px;
        color: black;
        background-color: transparent;
        border: 1px solid lightgray;
        border-bottom: none;
        border-radius: 10px 10px 0px 0px;
        cursor: pointer;
    }

    & > button:hover{
        color:white;
        background-color: #512DA8;
    }
`;

export const Line = styled.div`
    height: 1px;
    width: 100%;
    background-color: lightgray;
    margin-bottom: .5em;
`;

export const InputCommentContainer = styled.div`
    margin-bottom: .5em;
    display: flex;
    align-items: center;
    width: 250px;
    justify-content: space-around;

    & > a > img{
        width: 40px;
        height: 40px;
        object-fit: cover;
        border: 2px solid #673AB7;
        border-radius: 50%;
    }

    & > input {
        padding: .5em 1.5em .5em 1.5em;
        border-radius: 20px;
        border: 1px solid lightgray;
    }
`;


export const CommentsListContainer = styled.div`
    display:flex;
    width: 100%;
    max-height: 150px;
    flex-direction: column;
    margin-bottom: .5em;
    overflow-y:auto;
`;