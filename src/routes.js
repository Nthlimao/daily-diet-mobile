import { createStackNavigator } from 'react-navigation-stack'; 
import { createAppContainer } from 'react-navigation';

import Init from './pages/init';
import Second from './pages/second';

const Stack = createStackNavigator({
    Init,
    Second,
});


export default createAppContainer(Stack);