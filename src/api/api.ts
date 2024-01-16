import axios from 'axios';
import { eId } from '../config/eId';

const BASE_URL = 'http://185.244.172.108:8081/v1/outlay-rows/entity/';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getRows = async () => api.get(`${eId}/row/list`);

export const createOrUpdateRow = (type: string, data: any) => 
  api.post(`${eId}/row/${type === 'create' ? 'create' : `${data.parentId}/update`}`, data);

export const deleteRow = (id: number) => api.delete(`${eId}/row/${id}/delete`);