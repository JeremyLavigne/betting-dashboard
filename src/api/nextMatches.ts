import axios from 'axios';
import { NextMatch } from '../ts/db_types';

const BASE_URL = 'http://localhost:3001/api/next-matches';

const Api = axios.create({
    baseURL: BASE_URL,
});

const getAll = async (): Promise<Array<NextMatch>> => {
    const response = await Api.get('/');
    return response.data;
};

const getAllByChamp = async (champ: string): Promise<Array<NextMatch>> => {
    const response = await Api.get(`/${champ}`);
    return response.data;
};

const createAllForChamp = async (matches: Array<NextMatch>): Promise<Array<NextMatch>> => {
    const response = await Api.post('/', matches);
    return response.data;
};

const deleteAllByChamp = async (champ: string): Promise<string> => {
    const response = await Api.delete(`/${champ}`);
    return response.data;
};

export default {
    getAll,
    getAllByChamp,
    createAllForChamp,
    deleteAllByChamp,
};
