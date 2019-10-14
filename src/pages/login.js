import React from 'react';
import { View, Text, Button } from 'react-native';
import { setStorage } from '../store/local';
import { useNavigation } from 'react-navigation-hooks';

export default Login = () => {
    const { navigate } = useNavigation();

    const loginIn = () => {
        if(setStorage('userToken', '7defe6242e586e4b1356b8b9c1d8825b')) {
            navigate('App');
        } // else
    }
    
    const register = () => {
        navigate('Register');
    }

    return (
        <View>
            <View>
                <Text>Login</Text>
                <Button title="Fazer Login" onPress={() => loginIn()} />
                <Button title="Register" onPress={() => register()} />
            </View>
        </View>
    )
};

Login.navigationOptions = {
    title: 'Login',
    headerStyle: {
        elevation: 0, 
    },
};