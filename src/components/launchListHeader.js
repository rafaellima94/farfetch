//#region Imports

import React from 'react';
import styled from 'styled-components';
import FONT from '../assets/styles/font';

//#endregion

const LaunchHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding: 10px 20px 10px 50px;
    background-color: rgba(238, 82, 83, 0.5);
    margin: 0 60px;
`;

const HeaderText = styled.span`
    font-size: 18px;
    ${FONT.OPEN_SANS}
`;

const LaunchHeaderCell = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;
const LaunchHeaderCellImage = styled.div`
    margin: 0 25px;
    display: flex;
    justify-content: center;
`;

const LaunchListHeader = () => {
    return (
        <LaunchHeaderContainer>
            <LaunchHeaderCell>
                <HeaderText>Number</HeaderText>
            </LaunchHeaderCell>
            <LaunchHeaderCell>
                <HeaderText>Name</HeaderText>
            </LaunchHeaderCell>
            <LaunchHeaderCell>
                <HeaderText>Launch Date</HeaderText>
            </LaunchHeaderCell>
            <LaunchHeaderCell>
                <HeaderText>Year</HeaderText>
            </LaunchHeaderCell>
            <LaunchHeaderCell>
                <HeaderText>Successful</HeaderText>
            </LaunchHeaderCell>
            <LaunchHeaderCellImage>
                <HeaderText>Image</HeaderText>
            </LaunchHeaderCellImage>
        </LaunchHeaderContainer>
    );
};

export default LaunchListHeader;