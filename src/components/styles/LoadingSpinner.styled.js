import styled from "styled-components";

export const StyledLoadingSpinner = styled.div`
    display:flex;
    justify-content: center;
    width: 100%;
    padding: 1em;

    & > div{
        display: flex;
        border: 8px solid #f3f3f3;
        border-radius: 50%;
        border-top: 8px solid #512DA8;
        width: 60px;
        height: 60px;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
    }

    /* Safari */
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;