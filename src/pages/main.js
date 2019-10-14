import React from 'react';
import { View, Text, Button } from 'react-native';
import { clearStorage } from '../store/local';
import { useNavigation } from 'react-navigation-hooks';

export default Main = () => {
    const { navigate } = useNavigation();

    const second = () => {
        navigate('Second');
    }

    const logOut = async() => {
        if(await clearStorage()) {
            navigate('Auth');
        }
    }    

    return (
        <View>
            <View>
                <Text>Main</Text>
                <Button title="Second" onPress={() => second()} />
                <Button title="Logout" onPress={() => logOut()} />
            </View>
        </View>
    )
};