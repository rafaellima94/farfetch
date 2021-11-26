//#region Imports

import React, { useState } from 'react';
import styled from 'styled-components'
import FONT from '../assets/styles/font';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//#endregion

const FiltersContainer = styled.div`
    background-color: #fff;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
`;

const FiltersHeader = styled.div`
    flex: 1;
    display: flex;
    margin: 20px;
`;

const FiltersTitle = styled.h2`
    text-align: center;
    color: #ee5253;
    ${FONT.OPEN_SANS}
`;

const FiltersCell = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FiltersCellDatePicker = styled(FiltersCell)`
    flex-direction: column;
    align-items: flex-start;
`;

const FiltersCellCheckbox = styled(FiltersCell)`
    cursor: pointer;
    user-select: none;
`;

const FiltersText = styled.span`
    text-align: center;
    font-size: 18px;
    ${FONT.OPEN_SANS}
`;

const FiltersCheckbox = styled.input.attrs({ type: 'checkbox' })`
    width: 16px;
    height: 16px;
    border-radius: 5px;
`;

const LaunchFilters = (props) => {
    const [endDate, setEndDate] = useState(new Date(props.endDate));
    const [startDate, setStartDate] = useState(new Date(props.startDate));
    const [successfullCheck, setSuccessfullCheck] = useState(false);
    const [unsuccessfullCheck, setUnsuccessfullCheck] = useState(false);

    return (
        <FiltersContainer>
            <FiltersTitle>Filters</FiltersTitle>
            <FiltersHeader>
                <FiltersCellCheckbox onClick={() => { props.onChangeSuccessfulCheckbox(!successfullCheck); setSuccessfullCheck(prev => !prev); }}>
                    <FiltersCheckbox checked={successfullCheck} readOnly={true} />
                    <FiltersText>Successful Launches</FiltersText>
                </FiltersCellCheckbox>
                <FiltersCellCheckbox onClick={() => { props.onChangeUnsuccessfullCheckbox(!unsuccessfullCheck); setUnsuccessfullCheck(prev => !prev); }}>
                    <FiltersCheckbox checked={unsuccessfullCheck} readOnly={true} />
                    <FiltersText>Usuccessful Launches</FiltersText>
                </FiltersCellCheckbox>
                <FiltersCellDatePicker>
                    <FiltersText>Start Date</FiltersText>
                    <DatePicker selected={startDate} onChange={(date) => { props.onChangeStartDate(date); setStartDate(date); }} />
                </FiltersCellDatePicker>
                <FiltersCellDatePicker>
                    <FiltersText>End Date</FiltersText>
                    <DatePicker selected={endDate} onChange={(date) => { props.onChangeEndDate(date); setEndDate(date); }} />
                </FiltersCellDatePicker>
            </FiltersHeader>
        </FiltersContainer>
    );
};

export default LaunchFilters;