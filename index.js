import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './src';
import { name as appName } from './app.json';

import store from './src/store';
import client from './src/services/apollo';

const MyApp = () => (
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => MyApp);
