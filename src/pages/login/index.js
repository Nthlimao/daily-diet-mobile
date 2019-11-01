import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { useMutation } from '@apollo/react-hooks';
import { View, TextInput, Image } from 'react-native';
import { Button } from 'react-native-elements'
import { login, schemas } from '../../providers/auth';
import styles from './styles.css';

export default Login = () => {
    const { navigate } = useNavigation();
    const [submit, { data, loading, error }] = useMutation(schemas.LOGIN);
    const [variables, setVariables] = useState({ email: '', password: '' });  
    
    const handleChange = (value, target) => {
        setVariables(variables => ({ ...variables, [target]: value }));
    }

    const loginIn = () => {

    }
    
    const register = () => {
        navigate('Register');
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput 
                    style={styles.input} 
                    keyboardType="email-address" 
                    placeholder="E-mail" 
                    value={variables.email}
                    onChangeText={(text) => handleChange(text, 'email')}/>
                <Image style={styles.icon} source={require('../images/envelope.png')} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Senha" 
                    secureTextEntry={true}
                    value={variables.password}
                    onChangeText={(text) => handleChange(text, 'password')}/>
                <Image style={styles.icon} source={require('../images/padlock.png')} />
            </View>
            <View style={styles.wrapBtn}>
                <Button title="ENTRAR" buttonStyle={styles.button} titleStyle={styles.buttonTitle} loading={loading}/>
            </View>
            <View style={styles.wrapBtn}>
                <Button title="Fazer cadastro" type="clear" color="#96C5A4" titleStyle={styles.buttonClear} onPress={() => register()}/>
            </View>
        </View>
    )
};

Login.navigationOptions = {
    headerStyle: {
        elevation: 0,
        height: 40,
    },
};