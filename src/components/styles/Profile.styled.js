import styled from "styled-components";

export const StyledProfile = styled.div`
    display:flex;
    width: 500px;
    flex-direction: column;
    align-items: center;
    padding-top: 3em;
    `;

export const Container = styled.span`
    display: flex;
    width: 250px;
    flex-direction: column;
    align-items: center;
    
    & > img{
        width: 150px;
        border: 5px solid #512DA8;
        border-radius: 50%;
        margin-bottom: 1em;
    }

`;

export const UserStatsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    & > div{
        display:flex;
        flex-direction: column;
        align-items: center;
        background-color: #512DA8;
        border-radius: 10px;
        padding: .3em 2em .3em 2em;
        color: white;
        margin-top:.5em;
        
}
`;

export const Line = styled.div`
    height: 2px;
    width: 75%;
    background-color:#512DA8;
    margin-top: 1em;
`;