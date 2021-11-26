//#region Imports

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import LaunchListRow from './launchListRow';

//#endregion

const List = styled.div`
    flex: 1;
    margin: 0 60px 60px;
    display: flex;
    border: 1px solid #ccc;
    flex-direction: column;
    max-height: 395px;
`;

const LoadingText = styled.h3`
    text-align: center;
`;

const LaunchList = (props) => {
    const [listData, setListData] = useState(props.launchList.slice(0, 4));

    useEffect(() => {
        setListData(props.launchList.slice(0, 4));
    }, [props.launchList])

    const handleScroll = () => {
        setListData(props.launchList.slice(0, listData.length + 4));
    };

    return (
        <List>
            <InfiniteScroll
                dataLength={listData.length}
                next={handleScroll}
                hasMore={true}
                loader={<LoadingText>Loading...</LoadingText>}
                height={395}
                scrollThreshold={0.99}
            >
                {listData.map((launch, index) => <LaunchListRow key={index} launch={launch} />)}
            </InfiniteScroll>
        </List>
    );
};

export default LaunchList;