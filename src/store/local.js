import { AsyncStorage } from 'react-native';

const getStorage = (key) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key, (error, result) => {
            if(error) reject(null);
    
            resolve(result);
        })
    });
}

const setStorage = (key, value) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.setItem(key, value, (error) => {
            if(error) return reject(false);
    
            resolve(true);
        });        
    });
}

const clearStorage = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.clear((error) => {
            if(error) return reject(false);
    
            resolve(true);
        });        
    });
}

export { getStorage, setStorage, clearStorage }