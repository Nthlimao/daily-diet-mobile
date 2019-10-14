import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getStorage } from '../store/local';
import { useNavigation } from 'react-navigation-hooks';

async function getToken() {
    return await getStorage('userToken');
}

export default Init = () => {
    const { navigate } = useNavigation();
    const [ token, setToken ] = useState(undefined);
    
    useEffect(() => {
        const data = getToken();
        setToken(data);
    }, []);

    
    if(token !== undefined) {
        navigate(token ? 'App' : 'Auth');  
    }

    return (
        <View>
            <View>
                <Text>Loading...</Text>
            </View>
        </View>
    )
};