import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native';
import { setStorage } from '../store/local';
import { useNavigation } from 'react-navigation-hooks';

export default Login = () => {
    const { navigate } = useNavigation();
    const [variables, setVariables] = useState({ email: '', password: '' });  

    const loginIn = () => {
        if(setStorage('userToken', '7defe6242e586e4b1356b8b9c1d8825b')) {
            navigate('App');
        } // else
    }
    
    const register = () => {
        navigate('Register');
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Fazer Login</Text>
            </View>
            <View style={styles.inputGroup}>
                <TextInput style={styles.input} keyboardType="email-address" placeholder="E-mail" value={variables.email}/>
                <Image style={styles.icon} source={require('./images/envelope.png')} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput style={styles.input} placeholder="Senha" value={variables.password}/>
                <Image style={styles.icon} source={require('./images/padlock.png')} />
            </View>
            <View style={styles.wrapBtn}>
                <Button title="Login" color="#96C5A4" style={styles.button}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: -40,
    },
    text: {
        fontFamily: 'Segoeui-Regular',
        fontSize: 20,
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 3,
        width: '100%',
        alignSelf: 'stretch',
        marginBottom: 15,
    },
    input: {
        flex: 1,
        height: 47,
        fontSize: 16,
        fontFamily: 'Segoeui-Regular',
    },
    icon: {
        tintColor: '#BAC2C4',
        paddingLeft: 10,
    },
    button: {
        height:50,
        backgroundColor: '#96C5A4',
    },
    wrapBtn: {
        alignSelf: 'stretch',
    }
})


Login.navigationOptions = {
    headerStyle: {
        elevation: 0,
        height: 40,
    },
};