import { AsyncStorage } from 'react-native';
import { LOGIN } from './schemas';

const USER_KEY = '683ae67daa1f9cc72785ac163954a13f';

const read = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY, (error, result) => {
            if(error) reject(null);
    
            const data = (result !== null) 
                ? JSON.parse(result) || null
                : null; 

            resolve(data);
        })
    });
}

const write = (values) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.setItem(USER_KEY, values, (error) => {
            if(error) return reject(false);
    
            resolve(true);
        });        
    });
}

export const getUser = async() => {
    return await read();
}

export const login = async(data) => {
    const { user, token } = data;
    
    user.token = token;
    await write(user);
}

export const schemas = {
    LOGIN
}