import React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
// import { useSelector } from 'react-redux';
import gql from 'graphql-tag';

const USERS = gql`{
    users {
        id
        name
        email
    }
}`;

export default Init = () => {
    // const token = useSelector(state => state.token);
    const { data, error, loading } = useQuery(USERS);

    if (loading) {
        return <View><Text>Loading...</Text></View>;
    }

    if (error) {
        return <View><Text>{error.message}</Text></View>;
    }

    return (
        <View>
            {data.users.map(user => (
                <View key={user.id}>
                <Text>{user.id}</Text>
                <Text>{user.name}</Text>
                <Text>{user.email}</Text>
                </View>
            ))}
        </View>
    )
};