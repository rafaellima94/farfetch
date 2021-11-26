//#region Imports

import React from 'react';
import styled from 'styled-components'
import { css } from '@emotion/react';
import HashLoader from 'react-spinners/HashLoader';

//#endregion

const override = css`
    display: block;
    margin: 0 auto;
    border-color: #ee5253;
`;

const Spinner = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 400px;
`;

const Loader = (props) => {
    return (
        <Spinner>
            <HashLoader css={override} size={100} color={'#ee5253'} loading={props.loading} speedMultiplier={1.5} />
        </Spinner>
    );
};

export default Loader;