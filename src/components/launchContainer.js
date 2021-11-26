//#region Imports

import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import FONT from '../assets/styles/font';
import LaunchList from './launchList';
import LaunchFilters from './launchFilters';
import LaunchListHeader from './launchListHeader';

//#endregion

const Container = styled.div`
    background-color: #fff;
    flex: 1;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    margin: 20px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    text-align: center;
    color: #ee5253;
    ${FONT.OPEN_SANS}
`;

const EmptyList = styled.h2`
    text-align: center;
    font-size: 24px;
    color: #ee5253;
    ${FONT.OPEN_SANS}
`;

const LaunchContainer = (props) => {
    const [launchList, setLaunchList] = useState(props.launchList);
    const [endDate, setEndDate] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [successfullCheck, setSuccessfullCheck] = useState(false);
    const [unsuccessfullCheck, setUnsuccessfullCheck] = useState(false);

    useEffect(() => {
        setStartDate(getStartDate());
        setEndDate(getEndDate());
    }, []);

    useEffect(() => {
        let endDateTime = new Date(endDate);
        let startDateTime = new Date(startDate);

        if (endDateTime || startDateTime || successfullCheck || unsuccessfullCheck) {
            setLaunchList(props.launchList.filter(launch => {
                let launchDateTime = new Date(launch.launch_date_utc);

                if (endDateTime >= launchDateTime && startDateTime <= launchDateTime &&
                    (((unsuccessfullCheck && !launch.launch_success) || (successfullCheck && launch.launch_success)) || (!unsuccessfullCheck && !successfullCheck))
                ) return true;
                return false;
            }
            ));
        } else {
            setLaunchList(props.launchList);
        }
    }, [endDate, startDate, successfullCheck, unsuccessfullCheck]);

    const getStartDate = () => {
        return props.launchList.length > 0 ? props.launchList.reduce((a, b) => { return a.launch_date_utc < b.launch_date_utc ? a : b }).launch_date_utc : null;
    }

    const getEndDate = () => {
        return props.launchList.length > 0 ? props.launchList.reduce((a, b) => { return a.launch_date_utc > b.launch_date_utc ? a : b }).launch_date_utc : null;
    }

    return (
        <Container>
            <LaunchFilters
                startDate={getStartDate()}
                endDate={getEndDate()}
                onChangeEndDate={(value) => setEndDate(value)}
                onChangeStartDate={(value) => setStartDate(value)}
                onChangeSuccessfulCheckbox={(value) => setSuccessfullCheck(value)}
                onChangeUnsuccessfullCheckbox={(value) => setUnsuccessfullCheck(value)}
            />
            <Title>{props.title}</Title>
            <LaunchListHeader />
            {props.launchList.length > 0 ?
                <LaunchList launchList={launchList} />
                :
                <EmptyList>No launches.</EmptyList>
            }
        </Container>
    );
};

export default LaunchContainer;