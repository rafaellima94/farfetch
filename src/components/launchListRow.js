//#region Imports

import React, { useState } from 'react';
import styled from 'styled-components';
import FONT from '../assets/styles/font';
import placeholder from '../assets/images/rocket_placeholder.png';
import error from '../assets/images/error_icon.png';
import success from '../assets/images/success_icon.png';
import emptyStar from '../assets/images/empty_star_icon.png';
import fullStar from '../assets/images/full_star_icon.png';

//#endregion

const List = styled.div`
    background-color: #fff;
    flex: 1;
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const LaunchImage = styled.img`
    height: 100px;
    width: 100px;
    object-fit: cover;
`;

const LaunchImagePlaceholder = styled.img`
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 0 10px;
`;

const LaunchNumber = styled.span`
    font-size: 30px;
    color: #ee5253;
    font-weight: bold;
    margin-left: 20px;
    ${FONT.OPEN_SANS}
`;

const LaunchText = styled.span`
    font-size: 18px;
    ${FONT.OPEN_SANS}
`;

const LaunchCell = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

const LaunchCellImage = styled.div`
    display: flex;
    margin-left: 10px;
`;

const Icon = styled.img`
    height: 40px;
    width: 40px;
`;

const FavoriteContainer = styled.div`
    cursor: pointer;
`;

const FavoriteIcon = styled.img`
    height: 20px;
    width: 20px;
    margin: 0 20px;
`;

const LaunchListRow = (props) => {
    const [isFavorite, setIsFavorite] = useState(localStorage.getItem(props.launch.flight_number));

    const handleFavorite = (flightNumber) => {
        setIsFavorite(value => !value);
        localStorage.getItem(flightNumber) ? localStorage.removeItem(flightNumber) : localStorage.setItem(flightNumber, true);
    }

    const parseDate = (date) => {
        return new Date(date).toLocaleString();
    }

    return (
        <List>
            <FavoriteContainer onClick={() => handleFavorite(props.launch.flight_number)}>
                {isFavorite ?
                    <FavoriteIcon src={fullStar} />
                    :
                    <FavoriteIcon src={emptyStar} />
                }
            </FavoriteContainer>
            <LaunchCell>
                <LaunchNumber>{props.launch.flight_number}</LaunchNumber>
            </LaunchCell>
            <LaunchCell>
                <LaunchText>{props.launch.mission_name}</LaunchText>
            </LaunchCell>
            <LaunchCell>
                <LaunchText>{parseDate(props.launch.launch_date_utc)}</LaunchText>
            </LaunchCell>
            <LaunchCell>
                <LaunchText>{props.launch.launch_year}</LaunchText>
            </LaunchCell>
            <LaunchCell>
                {props.launch.launch_success ?
                    <Icon src={success} />
                    :
                    <Icon src={error} />
                }
            </LaunchCell>
            <LaunchCellImage>
                {props.launch.links?.flickr_images[0] ?
                    <LaunchImage src={props.launch.links.flickr_images[0]} placeholder={placeholder} loading={'lazy'} />
                    :
                    <LaunchImagePlaceholder src={placeholder} placeholder={placeholder} loading={'lazy'} />
                }
            </LaunchCellImage>
        </List>
    );
};

export default LaunchListRow;