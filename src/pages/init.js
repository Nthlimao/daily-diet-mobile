import React from 'react';
import { View, Text } from 'react-native';
import { useNavigationState, useNavigation } from 'react-navigation-hooks'
// import { useSelector } from 'react-redux';

import User from '../providers/user';


export default Init = () => {
    // const { navigate } = useNavigation();
    // navigate('Second');
    // const token = useSelector(state => state.token);
    const { routeName } = useNavigationState();
    // const { data, error, loading } = User.show("5d9cda1a38176a00174d5f13");
    
    // if (loading) {
    //     return <View><Text>Loading...</Text></View>;
    // }
    
    // if (error) {
    //     return <View><Text>{error.message}</Text></View>;
    // }

    // const { showProfile } = data;
    
    return (
        <View>
            <View>
                <Text>Rota: {routeName}</Text>
            </View>
        </View>
    )
};