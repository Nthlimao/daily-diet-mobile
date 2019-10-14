import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import Init from './pages/init';
import Second from './pages/second';
import Login from './pages/login';
import Register from './pages/register';
import Main from './pages/main';

const AppStack = createStackNavigator({
    Main,
    Second
});

const AuthStack = createStackNavigator({
    Login,
    Register
});

const Switch = createSwitchNavigator({
    Init,
    App: AppStack,
    Auth: AuthStack,
},{
    initialRouteName: 'Init',
});


export default createAppContainer(Switch);