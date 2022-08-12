import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})


export const ignatApi = {
    sendRequest(isError: boolean) {
        return instance.post(`/`, {success: isError}).then((response) => {
            console.log(response)
            return response; 
        })
    }
}