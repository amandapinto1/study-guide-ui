import { styled } from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #F0F0F0;

    padding: 0 20px;

    border-radius: 12px;
    /* border: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9; */

    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px;

    min-height: calc(100vh - 150px);
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`