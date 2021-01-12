import axios from 'axios';
import { LastUpdate } from '../ts/lastUpdate.type';

const BASE_URL = 'http://localhost:3001/api/last-update';

const Api = axios.create({
    baseURL: BASE_URL,
});

const getAll = async (): Promise<Array<LastUpdate>> => {
    const response = await Api.get('/');
    return response.data;
};

const getByChamp = async (champ: string): Promise<Array<LastUpdate>> => {
    const response = await Api.get(`/${champ}`);
    return response.data;
};

const createForChamp = async (lastUpdate: LastUpdate): Promise<Array<LastUpdate>> => {
    const response = await Api.post('/', lastUpdate);
    return response.data;
};

const deleteByChamp = async (champ: string): Promise<string> => {
    const response = await Api.delete(`/${champ}`);
    return response.data;
};

export default {
    getAll,
    getByChamp,
    createForChamp,
    deleteByChamp,
};
