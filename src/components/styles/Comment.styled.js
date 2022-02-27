import styled from "styled-components";

export const StyledComment = styled.div`
     margin-bottom: .5em;
    display: flex;
    align-items: center;
    padding-left: 5em;
    padding-right: 5em;

    & > a > img{
        width: 40px;
        height: 40px;
        object-fit: cover;
        border: 2px solid #673AB7;
        border-radius: 50%;
    }

    & > p {
        padding: .5em 1.5em .5em 1.5em;
        border-radius: 10px;
        border: 1px solid lightgray;
    }
`;