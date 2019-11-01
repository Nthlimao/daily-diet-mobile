import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import transitionConfig from './config/transition.config';

import Init from './pages/init';
import Second from './pages/second';
import Login from './pages/login';
import Register from './pages/register';
import Main from './pages/main';

const AppStack = createStackNavigator({
    Main,
    Second
},
{
    transitionConfig
});

const AuthStack = createStackNavigator({
    Login,
    Register
},{
    transitionConfig
});

const Switch = createSwitchNavigator({
    Init,
    App: AppStack,
    Auth: AuthStack,
},{
    initialRouteName: 'Init'    
});


export default createAppContainer(Switch);