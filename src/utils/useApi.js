//#region Imports

import axios from 'axios';
import ENDPOINT from './endpoints';

//#endregion

const useApi = () => {
    return axios.create({
        baseURL: ENDPOINT.BASE
    });
};

export default useApi;
