import axios, {AxiosResponse} from 'axios';
import {responseType} from './reducer';

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})


export const ignatApi = {
    sendRequest(isError: boolean) {
        return instance.post<responseType>(`/`, {success: isError}).then((response) => {
            return response.data; 
        }).catch(error => {
            return error.response.data
        })
    }
}