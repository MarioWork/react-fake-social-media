import styled from "styled-components";

export const StyledPostCard = styled.div`
width: 500px;
height: 356px;
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

    & > div{
        width: 100%;
        display: flex;
        padding: 16px;
    }

    & > div > div{
        display: flex;
        margin-right: auto;
    }

    & > div > div > p{
        margin-left: .3em;
    }
`;