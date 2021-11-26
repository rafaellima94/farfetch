//#region Imports

import React, { useEffect, useState } from 'react';
import useApi from '../../utils/useApi';
import Loader from '../../utils/loader';
import NavbarTop from '../../components/navbarTop';
import MainContainer from '../../components/mainContainer';
import LaunchContainer from '../../components/launchContainer';

//#endregion

const Launches = () => {
    const api = useApi();
    const [isLoading, setIsLoading] = useState(false);
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        // const getPastLaunches = async () => {
        //     setIsLoadingPast(true);

        //     await api.get('launches/past'
        //     ).then(result => {
        //         setIsLoadingPast(false);
        //         setPastLaunches(result.data);
        //     }).catch(error => {
        //         console.log(error);
        //     });
        // }

        // const getUpcomingLaunches = async () => {
        //     setIsLoadingUpcoming(true);

        //     await api.get('launches/upcoming'
        //     ).then(result => {
        //         setIsLoadingUpcoming(false);
        //         setUpcomingLaunches(result.data);
        //     }).catch(error => {
        //         console.log(error);
        //     });
        // }

        // getPastLaunches();
        // getUpcomingLaunches();

        const getLaunches = async () => {
            setIsLoading(true);
            await api.get('launches').then(result => {
                setLaunches(result.data);
                setIsLoading(false);
                // result.data.forEach(launch => {
                //     if (launch.launch_date_utc < new Date().toISOString()) {
                //         setPastLaunches(pastLaunches => [...pastLaunches, launch]);
                //     } else {
                //         setUpcomingLaunches(upcomingLaunches => [...upcomingLaunches, launch]);
                //     }
                // });
            }).catch(error => {
                console.log(error);
                setIsLoading(false);
            });
        }

        getLaunches();
    }, []);

    return (
        <div>
            <NavbarTop />
            {isLoading ?
                <Loader loading={isLoading} />
                :
                <MainContainer>
                    <LaunchContainer title={'Launches'} launchList={launches} />
                    {/* <LaunchContainer title={'Past Launches'} launchList={pastLaunches} /> */}
                    {/* <LaunchContainer title={'Upcoming Launches'} launchList={upcomingLaunches} /> */}
                </MainContainer>
            }
        </div>
    );
};

export default Launches;