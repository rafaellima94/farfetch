//#region Imports

import React from 'react';
import styled from 'styled-components'

//#endregion

const Main = styled.main`
    margin-top: 84px;
    padding: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const MainContainer = (props) => {
    return (
        <Main>
            {props.children}
        </Main>
    );
};

export default MainContainer;