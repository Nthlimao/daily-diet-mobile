import React from 'react';
import { View, Text } from 'react-native';
import { useNavigationState } from 'react-navigation-hooks'

export default Second = () => {
    const { routeName } = useNavigationState();

    return (
        <View>
            <View>
                <Text>Segunda Rota</Text>
                <Text>Rota: {routeName}</Text>
            </View>
        </View>
    )
};